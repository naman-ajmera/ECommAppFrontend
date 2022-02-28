import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_ERROR,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_ERROR,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_ERROR,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_ERROR,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_ERROR,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_ERROR,
  PRODUCT_CREATE_RESET,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_ERROR,
} from "../constants/productConstants";

export const getProducts = (data) => ({
  type: PRODUCT_LIST_REQUEST,
  payload: data,
});

export const getProductsSuccess = (data) => ({
  type: PRODUCT_LIST_SUCCESS,
  payload: data,
});

export const getProductsError = (error) => ({
  type: PRODUCT_LIST_ERROR,
  payload: error,
});

export const getProductDetails = (data) => ({
  type: PRODUCT_DETAILS_REQUEST,
  payload: data,
});

export const getProductDetailsSuccess = (data) => ({
  type: PRODUCT_DETAILS_SUCCESS,
  payload: data,
});

export const getProductDetailsError = (error) => ({
  type: PRODUCT_DETAILS_ERROR,
  payload: error,
});

export const createProductReview = (data) => ({
  type: PRODUCT_CREATE_REVIEW_REQUEST,
  payload: data,
});

export const createProductReviewSuccess = (data) => ({
  type: PRODUCT_CREATE_REVIEW_SUCCESS,
  payload: data,
});

export const createProductReviewError = (error) => ({
  type: PRODUCT_CREATE_REVIEW_ERROR,
  payload: error,
});

export const getTopProducts = () => ({ type: PRODUCT_TOP_REQUEST });

export const getTopProductsSuccess = (data) => ({
  type: PRODUCT_TOP_SUCCESS,
  payload: data,
});

export const getTopProductsError = (error) => ({
  type: PRODUCT_TOP_ERROR,
  payload: error,
});

export const deleteProduct = (payload) => ({
  type: PRODUCT_DELETE_REQUEST,
  payload,
});

export const deleteProductSuccess = (data) => ({
  type: PRODUCT_DELETE_SUCCESS,
  payload: data,
});

export const deleteProductError = (error) => ({
  type: PRODUCT_DELETE_ERROR,
  payload: error,
});

export const createProduct = (payload) => ({
  type: PRODUCT_CREATE_REQUEST,
  payload,
});

export const createProductSuccess = (data) => ({
  type: PRODUCT_CREATE_SUCCESS,
  payload: data,
});

export const createProductError = (error) => ({
  type: PRODUCT_CREATE_ERROR,
  payload: error,
});

export const createProductReset = () => ({ type: PRODUCT_CREATE_RESET });

export const updateProduct = (payload) => ({
  type: PRODUCT_UPDATE_REQUEST,
  payload,
});

export const updateProductSuccess = (data) => ({
  type: PRODUCT_UPDATE_SUCCESS,
  payload: data,
});

export const updateProductError = (error) => ({
  type: PRODUCT_UPDATE_ERROR,
  payload: error,
});

export const updateProductReset = () => ({ type: PRODUCT_UPDATE_ERROR });
