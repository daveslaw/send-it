import { React, Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import './navbar.styles.scss';

const NavBar = () => {
	return (
		<>
			<div className="navbar">
				<Link to='/' className='logo-container'><CrownLogo className='logo'/></Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop'>SHOP</Link>
                    <Link className='nav-link' to='/sign-in'>SIGN IN</Link>
                </div>
			</div>
			<Outlet />
		</>
	);
};

export default NavBar;
