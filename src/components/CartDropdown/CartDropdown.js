import { CartDropdownContainer, CartItems } from "./cart-dropdown.styles.js";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";

const CartDropdown = () => {
  const { cartItems, cartTotal, setShow } = useContext(CartContext);
  const navigate = useNavigate();
  const navToCheckoutHandler = () => {
    navigate("/checkout");
    setShow(false);
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} product={item} />
        ))}
        <div>
          {cartItems.length > 0
            ? `Total Price: $${parseFloat(cartTotal).toFixed(2)}`
            : `Cart is empty`}
        </div>
      </CartItems>

      <Button onClick={navToCheckoutHandler}>checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
