import {
  ORDER_CREATE_REQUEST_SUCCESS,
  ORDER_CREATE_REQUEST_ERROR,
  ORDER_LIST_REQUEST_ERROR,
  ORDER_LIST_REQUEST_SUCCESS,
  ORDER_PAY_REQUEST_SUCCESS,
  ORDER_PAY_REQUEST_ERROR,
  ORDER_DETAILS_REQUEST_SUCCESS,
  ORDER_DETAILS_REQUEST_ERROR,
  ORDER_PAY_RESET,
  ORDER_ALL_LIST_REQUEST_SUCCESS,
  ORDER_ALL_LIST_REQUEST_ERROR,
  ORDER_DELIVER_REQUEST_SUCCESS,
  ORDER_DELIVER_REQUEST_ERROR,
  ORDER_DELIVER_RESET,
} from "../constants/orderConstants";

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST_SUCCESS:
      return {
        success: true,
        order: action.payload,
      };
    case ORDER_CREATE_REQUEST_ERROR:
      return {
        success: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = { shippingAddress: {}, loading: true, orderItems: [] },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST_SUCCESS:
      return {
        orderItems: action.payload,
        loading: false,
      };
    case ORDER_DETAILS_REQUEST_ERROR:
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const orderPayReducer = (
  state = { shippingAddress: {}, loading: true, orderItems: [] },
  action
) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST_SUCCESS:
      return {
        success: true,
        loading: false,
      };
    case ORDER_PAY_REQUEST_ERROR:
      return {
        error: action.payload,
        loading: false,
      };
    case ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

export const orderDeliverReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_DELIVER_REQUEST_SUCCESS:
      return {
        success: true,
        loading: false,
      };
    case ORDER_DELIVER_REQUEST_ERROR:
      return {
        error: action.payload,
        loading: false,
      };
    case ORDER_DELIVER_RESET:
      return {};
    default:
      return state;
  }
};

export const orderListReducer = (
  state = { orders: [], loading: true },
  action
) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST_SUCCESS:
      return {
        orders: action.payload,
        loading: false,
      };
    case ORDER_LIST_REQUEST_ERROR:
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const orderAllListReducer = (
  state = { orders: [], loading: true },
  action
) => {
  switch (action.type) {
    case ORDER_ALL_LIST_REQUEST_SUCCESS:
      return {
        orders: action.payload,
        loading: false,
      };
    case ORDER_ALL_LIST_REQUEST_ERROR:
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
