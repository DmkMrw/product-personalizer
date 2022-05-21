import Button from "../Button/Button";
import clsx from 'clsx';
import styles from "./ProductOptions.module.scss";
import shortid from "shortid";
// import clsx from 'clsx';

const ProductOptions = (props) => {
     return (
          <form onSubmit={props.handleSubmitSummary}>
               <div className={styles.sizes}>
                    <h3 className={styles.optionLabel}>Sizes</h3>
                    <ul className={styles.choices}>
                         {props.sizes.map(size => <li key={shortid()} ><button onClick={() => props.handleSetSizeAndPrice(size)} type="button" className={size.name === props.currentSize ? styles.active : undefined}> {size.name}</button></li>)}
                    </ul>
               </div>
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

export default ProductOptions