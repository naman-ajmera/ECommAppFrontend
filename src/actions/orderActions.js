import {
  ORDER_CREATE_REQUEST,
  ORDER_LIST_REQUEST,
  ORDER_LIST_REQUEST_ERROR,
  ORDER_LIST_REQUEST_SUCCESS,
  ORDER_CREATE_REQUEST_SUCCESS,
  ORDER_PAY_REQUEST,
  ORDER_PAY_REQUEST_SUCCESS,
  ORDER_PAY_REQUEST_ERROR,
  ORDER_CREATE_REQUEST_ERROR,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_REQUEST_ERROR,
  ORDER_DETAILS_REQUEST_SUCCESS,
  ORDER_LIST_RESET,
  ORDER_ALL_LIST_REQUEST,
  ORDER_ALL_LIST_REQUEST_SUCCESS,
  ORDER_ALL_LIST_REQUEST_ERROR,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_REQUEST_SUCCESS,
  ORDER_DELIVER_REQUEST_ERROR,
} from "../constants/orderConstants";

export const createOrder = (data) => ({
  type: ORDER_CREATE_REQUEST,
  payload: data,
});

export const createOrderSuccess = (data) => ({
  type: ORDER_CREATE_REQUEST_SUCCESS,
  payload: data,
});

export const createOrderError = (error) => ({
  type: ORDER_CREATE_REQUEST_ERROR,
  payload: error,
});

export const getOrderDetails = (data) => ({
  type: ORDER_DETAILS_REQUEST,
  payload: data,
});

export const getOrderDetailsSuccess = (data) => ({
  type: ORDER_DETAILS_REQUEST_SUCCESS,
  payload: data,
});

export const getOrderDetailsError = (error) => ({
  type: ORDER_DETAILS_REQUEST_ERROR,
  payload: error,
});

export const payOrder = (data) => ({ type: ORDER_PAY_REQUEST, payload: data });

export const payOrderSuccess = (data) => ({
  type: ORDER_PAY_REQUEST_SUCCESS,
  payload: data,
});

export const payOrderError = (error) => ({
  type: ORDER_PAY_REQUEST_ERROR,
  payload: error,
});

export const deliverOrder = (data) => ({
  type: ORDER_DELIVER_REQUEST,
  payload: data,
});

export const deliverOrderSuccess = (data) => ({
  type: ORDER_DELIVER_REQUEST_SUCCESS,
  payload: data,
});

export const deliverOrderError = (error) => ({
  type: ORDER_DELIVER_REQUEST_ERROR,
  payload: error,
});

export const getOrderList = () => ({ type: ORDER_LIST_REQUEST });

export const orderListReset = () => ({ type: ORDER_LIST_RESET });

export const getOrderListSuccess = (data) => ({
  type: ORDER_LIST_REQUEST_SUCCESS,
  payload: data,
});

export const getOrderListError = (error) => ({
  type: ORDER_LIST_REQUEST_ERROR,
  payload: error,
});

export const getOrderAllList = () => ({ type: ORDER_ALL_LIST_REQUEST });

export const getOrderAllListSuccess = (data) => ({
  type: ORDER_ALL_LIST_REQUEST_SUCCESS,
  payload: data,
});

export const getOrderAllListError = (error) => ({
  type: ORDER_ALL_LIST_REQUEST_ERROR,
  payload: error,
});
