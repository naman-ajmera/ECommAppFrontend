import {
  CART_ADD_ITEM,
  CART_ADD_ITEM_SUCCESS,
  CART_REMOVE_ITEM_SUCCESS,
  CART_SAVE_PAYMENT_METHOD_SUCCESS,
  CART_ADD_ITEM_ERROR,
  CART_REMOVE_ITEM,
  SAVE_SHIPPING_ADDRESS,
  SAVE_SHIPPING_ADDRESS_SUCCESS,
  CART_SAVE_PAYMENT_METHOD,
} from "../constants/cartConstants";

export const addProductsToCart = (payload) => ({
  type: CART_ADD_ITEM,
  payload,
});

export const addProductsToCartSuccess = (data) => ({
  type: CART_ADD_ITEM_SUCCESS,
  payload: data,
});

export const addProductsToCartError = (error) => ({
  type: CART_ADD_ITEM_ERROR,
  payload: error,
});

export const removeProductFromCart = (payload) => ({
  type: CART_REMOVE_ITEM,
  payload,
});

export const removeProductFromCartSuccess = (payload) => ({
  type: CART_REMOVE_ITEM_SUCCESS,
  payload,
});

export const saveShippingAddress = (payload) => ({
  type: SAVE_SHIPPING_ADDRESS,
  payload,
});

export const saveShippingAddressSuccess = (payload) => ({
  type: SAVE_SHIPPING_ADDRESS_SUCCESS,
  payload,
});

export const savePaymentMethod = (payload) => ({
  type: CART_SAVE_PAYMENT_METHOD,
  payload,
});

export const savePaymentMethodSuccess = (payload) => ({
  type: CART_SAVE_PAYMENT_METHOD_SUCCESS,
  payload,
});
