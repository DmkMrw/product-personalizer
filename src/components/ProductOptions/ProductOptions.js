import Button from "../Button/Button";
import clsx from 'clsx';
import styles from "./ProductOptions.module.scss";
import shortid from "shortid";
import OptionSize from "../OptionSize/OptionSize";
import PropTypes from 'prop-types';

const ProductOptions = (props) => {
     return (
          <form onSubmit={props.handleSubmitSummary}>

               <OptionSize sizes={props.sizes} handleSetSizeAndPrice={props.handleSetSizeAndPrice} currentSize={props.currentSize}/>

               <div className={styles.colors}>
                    <h3 className={styles.optionLabel}>Colors</h3>
                    <ul className={styles.choices}>
                         {props.colors.map(item => <li key={shortid()}><button onClick={() => props.handleSetColor(item)} type="button" className={clsx(props.prepareColorClassName(item), item === props.currentColor && styles.active)} /></li>)}
                    </ul>
               </div>
               <Button className={styles.button}>
                    <span className="fa fa-shopping-cart" />
               </Button>
          </form>
     );
}

ProductOptions.propTypes = {
     handleSubmitSummary: PropTypes.func.isRequired,
};

export default ProductOptions