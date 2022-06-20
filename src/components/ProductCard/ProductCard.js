
import './product-card.styles.scss';
import Button, {buttonTypeClasses} from '../Button/Button'
import {useContext} from 'react';
import {CartContext} from '../../context/cart.context';

const ProductCard = ({product}) => {
  
  const {name, price, imageUrl} = product;
  const {addItemToCart} = useContext(CartContext)
  const addProductToCart = () => addItemToCart(product)
    return (
    <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`}/>
        <div className="product-info-footer">
            <div className="product-name">{name}</div>
            <div className="product-price">${parseFloat(price).toFixed(2)}</div>
        </div>
        <Button buttonType={buttonTypeClasses.inverted} onClick={addProductToCart}>Add to cart</Button>
        

    </div>
  )
}

export default ProductCard