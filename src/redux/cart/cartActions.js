import { cartTypes } from "./cartTypes";

export const toggleCartDropdown = () => ({
  type: cartTypes.TOGGLE_CART_DROPDOWN
});

export const addItem = item => ({
  type: cartTypes.ADD_ITEM,
  payload: item
})