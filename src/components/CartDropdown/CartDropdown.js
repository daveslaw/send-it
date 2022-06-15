import './cart-dropdown.scss';
import Button from '../Button/Button'

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
        <div className="cart-items"></div>
        <Button>checkout</Button>
    </div>
  )
}

export default CartDropdown