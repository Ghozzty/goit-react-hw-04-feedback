import PropTypes from "prop-types";
import css from './section.module.css'

export const Section = ({title, children}) => {
    return (
        <section className={css.wrapper}>
            <h1 className={css.title}>{title}</h1>
            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
}