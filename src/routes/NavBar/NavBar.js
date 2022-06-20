import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as TruckLogo } from "../../assets/truck.svg";
import {
	NavigationContainer,
	LogoContainer,
	NavLinks,
	NavLink,
} from "./navbar.styles.js";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/Firebase/firebase.utils";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import { CartContext } from "../../context/cart.context";

const NavBar = () => {
	const { currentUser } = useContext(UserContext);
	const { show } = useContext(CartContext);

	return (
		<>
			<NavigationContainer>
				<LogoContainer to="/">
					<TruckLogo className="logo" />
				</LogoContainer>
				<NavLinks>
					<NavLink to="/shop">SHOP</NavLink>
					{currentUser ? (
						<NavLink as="span" onClick={signOutUser}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to="/auth">SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{show && <CartDropdown />}
			</NavigationContainer>

			<Outlet />
		</>
	);
};

export default NavBar;
