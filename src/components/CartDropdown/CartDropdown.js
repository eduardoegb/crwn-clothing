import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(item => <CartItem item={item} key={item.id}/>)}
    </div>
    <CustomButton>Go to checkout</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);