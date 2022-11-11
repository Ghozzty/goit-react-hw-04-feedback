import { useState } from 'react';
import { Statistics } from 'components/statistics/statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/section/section';
import { Notification } from 'components/notification/notification';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickEvent = e => {
    const nameBtn = e.target.name;

    if (nameBtn === 'good') {
      return setGood(good => good + 1);
    }
    if (nameBtn === 'bad') {
      return setBad(bad => bad + 1);
    }
    if (nameBtn === 'neutral') {
      return setNeutral(neutral => neutral + 1);
    }

    return;
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={clickEvent}
        />

        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
