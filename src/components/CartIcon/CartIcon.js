import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';
import { toggleCartDropdown } from '../../redux/cart/cartActions';

const CartIcon = ({ itemCount, toggleCartDropdown }) => (
  <div className="cart-icon" onClick={toggleCartDropdown}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count">{itemCount}</span>
  </div>  
);

const mapStateToProps = state => ({
  itemCount: state.cart.cartItems.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)
});

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);