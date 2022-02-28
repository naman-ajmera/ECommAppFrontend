import {
  CART_ADD_ITEM_SUCCESS,
  CART_ADD_ITEM_ERROR,
  CART_REMOVE_ITEM_SUCCESS,
  SAVE_SHIPPING_ADDRESS_SUCCESS,
  CART_SAVE_PAYMENT_METHOD_SUCCESS,
} from "../constants/cartConstants";

export const cartReducer = (
  state = {
    loading: true,
    paymentMethod: "",
    shippingAddress: {},
    cartItems: [],
  },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM_SUCCESS:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          loading: false,
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      }
      return {
        loading: false,
        ...state,
        cartItems: [...state.cartItems, item],
      };

    case CART_ADD_ITEM_ERROR:
      return { loading: false, error: action.payload };
    case CART_REMOVE_ITEM_SUCCESS:
      return {
        loading: false,
        ...state,
        cartItems: state.cartItems.filter(
          (x) => x.product !== action.payload.id
        ),
      };
    case SAVE_SHIPPING_ADDRESS_SUCCESS:
      return { loading: false, ...state, shippingAddress: action.payload };
    case CART_SAVE_PAYMENT_METHOD_SUCCESS:
      return {
        loading: false,
        ...state,
        paymentMethod: action.payload.paymentMethod,
      };
    default:
      return state;
  }
};
