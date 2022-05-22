import Button from "../Button/Button";
import OptionSize from "../OptionSize/OptionSize";
import OptionColor from "../OptionColor/OptionColor";
import styles from "./ProductOptions.module.scss";
import PropTypes from 'prop-types';

const ProductOptions = (props) => {
     return (
          <form onSubmit={props.handleSubmitSummary}>

               <OptionSize sizes={props.sizes} handleSetSizeAndPrice={props.handleSetSizeAndPrice} currentSize={props.currentSize}/>

               <OptionColor colors={props.colors} handleSetColor={props.handleSetColor} prepareColorClassName={props.prepareColorClassName} currentColor={props.currentColor} />

               <Button className={styles.button}>
                    <span className="fa fa-shopping-cart" />
               </Button>
          </form>
     );
}

ProductOptions.propTypes = {
     handleSubmitSummary: PropTypes.func.isRequired,
     sizes: PropTypes.string.isRequired,
     handleSetSizeAndPrice: PropTypes.func.isRequired,
     currentSize: PropTypes.string.isRequired,
     colors: PropTypes.string.isRequired,
     currentColor: PropTypes.string.isRequired,
     handleSetColor: PropTypes.func.isRequired,
     prepareColorClassName: PropTypes.func.isRequired,
};

export default ProductOptions