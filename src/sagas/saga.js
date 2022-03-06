import { takeEvery } from "redux-saga/effects";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_TOP_REQUEST,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_UPDATE_REQUEST,
} from "../constants/productConstants";
import {
  USER_LOGIN_REQUEST,
  USER_REGISTER_REQUEST,
  USER_DETAILS_REQUEST,
  USER_UPDATE_PROFILE_REQUEST,
  USER_LIST_REQUEST,
  USER_DELETE_REQUEST,
  USER_UPDATE_REQUEST,
} from "../constants/userConstants";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from "../constants/cartConstants";
import {
  handleGetProducts,
  handleCreateOrder,
  handlePayOrderRequest,
  handleGetOrderDetails,
  handleCartSavePayement,
  handleRemoveProductFromCart,
  handleSaveShippingAddress,
  handleGetProductDetails,
  handleUpdateUserDetails,
  handleAddProductsToCart,
  handleUserLogin,
  handleUserRegister,
  handleGetUserDetails,
  handlerGetOrderList,
  handleGetUserList,
  handleCreateProductReview,
  handleGetTopProduct,
  handleUserDelete,
  handleProductDelete,
  handleCreateProduct,
  handleUpdateProduct,
  handleGetAllOrderList,
  handleOrderDeliverRequest,
  handleUserUpdate,
} from "./handlers";
import {
  ORDER_CREATE_REQUEST,
  ORDER_LIST_REQUEST,
  ORDER_DETAILS_REQUEST,
  ORDER_PAY_REQUEST,
  ORDER_ALL_LIST_REQUEST,
  ORDER_DELIVER_REQUEST,
} from "../constants/orderConstants";

export default function* watcherSaga() {
  yield takeEvery(PRODUCT_LIST_REQUEST, handleGetProducts);
  yield takeEvery(PRODUCT_DETAILS_REQUEST, handleGetProductDetails);
  yield takeEvery(CART_ADD_ITEM, handleAddProductsToCart);
  yield takeEvery(USER_LOGIN_REQUEST, handleUserLogin);
  yield takeEvery(USER_REGISTER_REQUEST, handleUserRegister);
  yield takeEvery(USER_DETAILS_REQUEST, handleGetUserDetails);
  yield takeEvery(USER_UPDATE_PROFILE_REQUEST, handleUpdateUserDetails);
  yield takeEvery(CART_REMOVE_ITEM, handleRemoveProductFromCart);
  yield takeEvery(SAVE_SHIPPING_ADDRESS, handleSaveShippingAddress);
  yield takeEvery(CART_SAVE_PAYMENT_METHOD, handleCartSavePayement);
  yield takeEvery(ORDER_CREATE_REQUEST, handleCreateOrder);
  yield takeEvery(ORDER_DETAILS_REQUEST, handleGetOrderDetails);
  yield takeEvery(ORDER_PAY_REQUEST, handlePayOrderRequest);
  yield takeEvery(ORDER_LIST_REQUEST, handlerGetOrderList);
  yield takeEvery(USER_LIST_REQUEST, handleGetUserList);
  yield takeEvery(PRODUCT_CREATE_REVIEW_REQUEST, handleCreateProductReview);
  yield takeEvery(PRODUCT_TOP_REQUEST, handleGetTopProduct);
  yield takeEvery(USER_DELETE_REQUEST, handleUserDelete);
  yield takeEvery(PRODUCT_DELETE_REQUEST, handleProductDelete);
  yield takeEvery(PRODUCT_CREATE_REQUEST, handleCreateProduct);
  yield takeEvery(PRODUCT_UPDATE_REQUEST, handleUpdateProduct);
  yield takeEvery(ORDER_ALL_LIST_REQUEST, handleGetAllOrderList);
  yield takeEvery(ORDER_DELIVER_REQUEST, handleOrderDeliverRequest);
  yield takeEvery(USER_UPDATE_REQUEST, handleUserUpdate);
}
