import styles from './OptionSize.module.scss'
import shortid from 'shortid';
import PropTypes from 'prop-types';

const OptionSize = (props) => {


     return (
          <div className={styles.sizes}>
               <h3 className={styles.optionLabel}>Sizes</h3>
               <ul className={styles.choices}>
                    {props.sizes.map(size => <li key={shortid()} ><button onClick={() => { props.handleSetSizeAndPrice(size.name); props.setAdditionalPrice(size.additionalPrice) }} type="button" className={size.name === props.currentSize ? styles.active : undefined} > {size.name}</button></li>)}
               </ul>
          </div>
     );

};

OptionSize.propType = {
     sizes: PropTypes.string.isRequired,
     handleSetSizeAndPrice: PropTypes.func.isRequired,
     currentSize: PropTypes.string.isRequired,
};

export default OptionSize