import { React, Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as TruckLogo } from "../../assets/truck.svg";
import "./navbar.styles.scss";

const NavBar = () => {
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
					<Link className="nav-link" to="/auth">
						SIGN IN
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default NavBar;
