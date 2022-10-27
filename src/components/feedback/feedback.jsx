import { Component } from "react";
import { Statistics } from "components/statistics/statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "components/section/section";
import { Notification } from "components/notification/notification";

export class Feedback extends Component{

state = {
    good: 0,
    neutral: 0,
    bad: 0
    }

// clickEvent = (e) => this.setState((prevState)=> {
//     const nameBtn = [e.target.textContent].join('').toLowerCase();
    
//     return {[nameBtn]: prevState[nameBtn] + 1}
// });

clickEvent = (e) => this.setState((prevState)=> {
    const nameBtn = e.target.name;
       
    return {[nameBtn]: prevState[nameBtn] + 1}
});


countTotalFeedback = () => {return (this.state.good + this.state.neutral + this.state.bad)};

countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0 ){
        return 0;
    }
    return Math.round((this.state.good / total) * 100) ;
}


render() {

    return (  
        <div>
        <Section title="Please leave feedback">
            <FeedbackOptions
                options={this.state} onLeaveFeedback={this.clickEvent}/>

            {this.countTotalFeedback() > 0 ?
                <Statistics 
                good={this.state.good}
                neutral={this.state.neutral} 
                bad={this.state.bad} 
                total={this.countTotalFeedback()} 
                positivePercentage={this.countPositiveFeedbackPercentage()}/>
            :
                <Notification message="There is no feedback"/>
            }
        
        </Section>
    
        </div>
        
    )
    }
}