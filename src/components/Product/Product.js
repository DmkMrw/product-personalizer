import stylesProduct from './Product.module.scss';
import styles from '../OptionColor/OptionColor.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';
import { useMemo } from 'react/cjs/react.production.min';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(props.basePrice)

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const handleSetColor = (color) => {
    setCurrentColor(color)
  }

  const handleSetSizeAndPrice = useMemo((currentSize) => {
    return (
      setCurrentSize(currentSize.name),
      setCurrentPrice(currentSize.additionalPrice + props.basePrice)
    )
  }, [currentSize]);

  // const handleSetSizeAndPrice = (size) => {
  //   setCurrentSize(size.name)
  //   setCurrentPrice(size.additionalPrice + props.basePrice)
  // }

  console.log('tewt');

  const handleSubmitSummary = (e) => {
    e.preventDefault();
    console.log('Summary');
    console.log('=================');
    console.log('Name: ', props.title);
    console.log('Price: ', currentPrice);
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);
  }

  return (
    <article className={stylesProduct.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor}/>
      <div>

        <header>
          <h2 className={stylesProduct.name}>{props.title}</h2>
          <span className={stylesProduct.price}>Price: {currentPrice}$</span>
        </header>

        <ProductOptions sizes={props.sizes} colors={props.colors} currentColor={currentColor} currentSize={currentSize} handleSubmitSummary={handleSubmitSummary} handleSetSizeAndPrice={handleSetSizeAndPrice} handleSetColor={handleSetColor} prepareColorClassName={prepareColorClassName} />

      </div>
    </article>
  )
};


Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;