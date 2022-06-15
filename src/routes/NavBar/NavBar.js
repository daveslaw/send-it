import { React, Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as TruckLogo } from "../../assets/truck.svg";
import "./navbar.styles.scss";
import { UserContext } from "../../context/user.context";
import {signOutUser} from '../../utils/Firebase/firebase.utils'

const NavBar = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	const signOutHandler = async () => {
		await signOutUser;
		
		setCurrentUser(null);
	}

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
						<span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
					) : (
						<Link className="nav-link" to="/auth">
							SIGN IN
						</Link>
					)}
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default NavBar;
