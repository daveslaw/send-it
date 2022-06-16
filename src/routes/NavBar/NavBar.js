import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as TruckLogo } from "../../assets/truck.svg";
import "./navbar.styles.scss";
import { UserContext } from "../../context/user.context";
import {signOutUser} from '../../utils/Firebase/firebase.utils';
import CartIcon from '../../components/CartIcon/CartIcon'
import CartDropdown from '../../components/CartDropdown/CartDropdown'
import { CartContext } from "../../context/cart.context";


const NavBar = () => {
	const { currentUser } = useContext(UserContext);
	const {show} = useContext(CartContext);
	
	

	return (
		<>
			<div className="navbar">
				<Link to="/" className="logo-container">
					<TruckLogo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						SHOP
					</Link>
					{currentUser ? (
						<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
					) : (
						<Link className="nav-link" to="/auth">
							SIGN IN
						</Link>
					)}
					<CartIcon/>
				</div>
				{show && <CartDropdown/>}
			</div>
			<Outlet />
		</>
	);
};

export default NavBar;
