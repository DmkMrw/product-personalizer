import styles from './Button.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types'

const Button = (props) => {
    return (<button className={clsx(styles.button, props.className)} onClick={props.handleSubmitSummary} >{props.children}</button>);
};

Button.propType = {
    className: PropTypes.string.isRequired,
    handleSubmitSummary: PropTypes.func.isRequired,
};

export default Button;