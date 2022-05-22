import styles from './OptionColor.module.scss'
import shortid from "shortid";
import clsx from "clsx";
import PropTypes from 'prop-types'



const OptionColor = (props) => {
     return (
          <div className={styles.colors}>
               <h3 className={styles.optionLabel}>Colors</h3>
               <ul className={styles.choices}>
                    {props.colors.map(item => <li key={shortid()}><button onClick={() => props.handleSetColor(item)} type="button" className={clsx(props.prepareColorClassName(item), item === props.currentColor && styles.active)} /></li>)}
               </ul>
          </div>
     );
}

OptionColor.propTypes = {
     colors: PropTypes.array.isRequired,
     handleSetColor: PropTypes.func.isRequired,
     prepareColorClassName: PropTypes.func.isRequired,
     currentColor: PropTypes.string.isRequired,
};

export default OptionColor;