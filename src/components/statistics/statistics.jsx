import PropTypes from "prop-types";
import css from './statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
            <h2 className={css.title}>Statistics</h2>
            <p className={css.indicators}>Good: <span className={css.numbers}>{good}</span></p>
            <p className={css.indicators}>Neutral: <span className={css.numbers}>{neutral}</span></p>
            <p className={css.indicators}>Bad: <span className={css.numbers}>{bad}</span></p>
            <p className={css.indicators}>Total: <span className={css.numbers}>{total}</span></p>
            <p className={css.indicators}>Positive feedback: <span className={css.numbers}>{positivePercentage}%</span></p>
    
        </div>
    )
}


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  
  };

  