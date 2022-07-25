import {
  CartItemContainer,
  Image,
  ItemDetails,
  ItemName,
} from "./cart-item.styles.js";

const CartItem = ({ product }) => {
  const { name, imageUrl, price, quantity } = product;
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={name} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
