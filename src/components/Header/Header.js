import React from 'react';
import { connect } from 'react-redux';
import './Header.scss'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

const Header = ({ currentUser, hidden }) => {
	return (
		<div className="header">
			<Link to="/" className="logo-container">
				{/* <img src={Logo} alt=""/> */}
				<Logo />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">SHOP</Link>
				<Link className="option" to="/contact">CONTACT</Link>
				{
					currentUser ?
					<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
					:
					<Link className="option" to="/signin">SIGN IN</Link>
				}
				<CartIcon />
			</div>
			{!hidden?<CartDropdown />:null}
		</div>
	)
}

const mapStateToProps = state => ({
	currentUser: state.user.currentUser,
	hidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);