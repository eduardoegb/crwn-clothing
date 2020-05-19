export const addItemToCart = (cartItems, item) => {
  const exists = cartItems.find(cartItem => cartItem.id === item.id);

  if (exists) {
    return cartItems.map(cartItem => {
      if (cartItem.id === item.id) {
        return {...cartItem, quantity: cartItem.quantity + 1}
      }
      return cartItem;
    });
  }
  return [...cartItems, {...item, quantity: 1}]
}