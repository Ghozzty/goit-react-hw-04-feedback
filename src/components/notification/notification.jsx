import PropTypes from "prop-types";
import css from './notification.module.css'


export const Notification = ({message}) =>{
    return(
        <h2 className={css.title}>{message}</h2>
    )

}


Notification.propTypes = {
    message: PropTypes.string.isRequired,

}