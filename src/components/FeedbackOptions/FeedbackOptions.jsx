import PropTypes from "prop-types";
import css from './feedBackOptions.module.css'

export const FeedbackOptions = ({options, onLeaveFeedback}) => { 

    function toUpFirstSymbol  (word)  {
        let wordArr = word.split('');
        wordArr[0] = (wordArr[0]).toUpperCase();
        return wordArr.join('');
    }

    return(      
        
        <ul className={css.btnList}>
            {
            Object.keys(options).map((item) => {
                return (<li key={item} className={css.btnListItem}>
                    <button onClick={onLeaveFeedback} name={item} className={css.btn}>{toUpFirstSymbol(item)}</button>
                        </li>)           
            }) 
            }
        </ul>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options:PropTypes.objectOf(PropTypes.number).isRequired,
  };
