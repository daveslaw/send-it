
import './product-card.styles.scss';
import Button from '../Button/Button'

const ProductCard = ({product}) => {
  
  const {name, price, imageUrl} = product;
    return (
    <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`}/>
        <div className="product-info-footer">
            <div className="product-name">{name}</div>
            <div className="product-price">{price}</div>
        </div>
        <Button buttonType="inverted">Add to cart</Button>
        

    </div>
  )
}

export default ProductCard