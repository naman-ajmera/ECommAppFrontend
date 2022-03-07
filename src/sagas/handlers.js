import { call, put, select } from "redux-saga/effects";
import {
  requestGetProducts,
  requestGetProductDetails,
  productReviewCreateRequest,
  getTopProductsRequest,
  requestProductDelete,
  requestProductCreate,
  requestProductUpdate,
} from "./requests/productRequests";
import {
  createOrderSuccess,
  createOrderError,
  getOrderDetailsSuccess,
  getOrderDetailsError,
  payOrderSuccess,
  payOrderError,
  getOrderListSuccess,
  getOrderListError,
  getOrderAllListSuccess,
  getOrderAllListError,
  deliverOrderSuccess,
  deliverOrderError,
} from "../actions/orderActions";
import {
  createOrderRequest,
  getOrderDetailsRequest,
  payOrderRequest,
  orderListRequest,
  orderAllListRequest,
  deliverOrderRequest,
} from "./requests/orderRequests";
import {
  getProductsSuccess,
  getProductsError,
  getProductDetailsSuccess,
  getProductDetailsError,
  createProductReviewSuccess,
  createProductReviewError,
  getTopProductsSuccess,
  getTopProductsError,
  deleteProductSuccess,
  deleteProductError,
  createProductSuccess,
  createProductError,
  updateProductSuccess,
  updateProductError,
} from "../actions/productActions";
import {
  addProductsToCartSuccess,
  addProductsToCartError,
  saveShippingAddressSuccess,
  savePaymentMethodSuccess,
  removeProductFromCartSuccess,
} from "../actions/cartActions";
import {
  loginSuccess,
  loginError,
  registerSuccess,
  registerError,
  getUserDetailsSuccess,
  getUserDetailsError,
  updateUserDetailsSuccess,
  updateUserDetailsError,
  listUsersSuccess,
  listUsersError,
  login,
  deleteUserSuccess,
  deleteUserError,
  updateUserSuccess,
  updateUserError,
} from "../actions/userActions";
import {
  requestLogin,
  requestRegister,
  requestUserDetails,
  requestUpdateUserDetails,
  requestUserList,
  requestUserDelete,
  userUpdateRequest,
} from "./requests/userRequest";
import * as selectors from "./selectors";

export function* handleGetProducts(payload) {
  try {
    const response = yield call(
      requestGetProducts,
      payload.payload && payload.payload.keyword ? payload.payload.keyword : "",
      payload.payload && payload.payload.pageNumber
        ? payload.payload.pageNumber
        : ""
    );
    yield put(getProductsSuccess(response.data));
  } catch (error) {
    yield put(
      getProductsError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

export function* handleGetProductDetails(payload) {
  try {
    const response = yield call(requestGetProductDetails, payload.payload);
    yield put(getProductDetailsSuccess(response.data));
  } catch (error) {
    yield put(
      getProductDetailsError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

export function* handleAddProductsToCart(payload) {
  try {
    const cartItems = yield select(selectors.cartItems);

    const { data } = yield call(requestGetProductDetails, payload.payload);
    yield put(
      addProductsToCartSuccess({
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty: payload.payload.qty,
      })
    );

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  } catch (error) {
    yield put(
      addProductsToCartError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

export function* handleUserLogin(payload) {
  try {
    const response = yield call(requestLogin, payload.payload);
    localStorage.setItem("userInfo", JSON.stringify(response.data));
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(
      loginError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

export function* handleUserRegister(payload) {
  try {
    const response = yield call(requestRegister, payload.payload);
    yield put(registerSuccess(response.data));
    yield put(login(payload.payload));
  } catch (error) {
    yield put(
      registerError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

export function* handleGetUserDetails(payload) {
  try {
    const userInfo = yield select(selectors.userInfo);

    const response = yield call(requestUserDetails, payload.payload, userInfo);
    yield put(getUserDetailsSuccess(response.data));
  } catch (error) {
    yield put(
      getUserDetailsError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

export function* handleUpdateUserDetails(payload) {
  try {
    const userInfo = yield select(selectors.userInfo);

    const response = yield call(
      requestUpdateUserDetails,
      payload.payload,
      userInfo
    );
    yield put(updateUserDetailsSuccess(response.data));
    yield put(loginSuccess(response.data));
    localStorage.setItem("userInfo", JSON.stringify(response.data));
  } catch (error) {
    yield put(
      updateUserDetailsError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

export function* handleRemoveProductFromCart(payload) {
  yield put(removeProductFromCartSuccess(payload.payload));
  const cartItems = yield select(selectors.cartItems);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

export function* handleSaveShippingAddress(payload) {
  yield put(saveShippingAddressSuccess(payload.payload));
  localStorage.setItem("shippingAddress", JSON.stringify(payload.payload));
}

export function* handleCartSavePayement(payload) {
  yield put(savePaymentMethodSuccess(payload.payload));
  localStorage.setItem(
    "paymentMethod",
    JSON.stringify(payload.payload.paymentMethod)
  );
}

export function* handleCreateOrder(payload) {
  try {
    const userInfo = yield select(selectors.userInfo);

    const response = yield call(createOrderRequest, payload.payload, userInfo);
    yield put(createOrderSuccess(response.data));
  } catch (error) {
    yield put(
      createOrderError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

export function* handleGetOrderDetails(payload) {
  try {
    const userInfo = yield select(selectors.userInfo);

    const response = yield call(
      getOrderDetailsRequest,
      payload.payload,
      userInfo
    );
    yield put(getOrderDetailsSuccess(response.data));
  } catch (error) {
    yield put(
      getOrderDetailsError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

export function* handlePayOrderRequest(payload) {
  try {
    const userInfo = yield select(selectors.userInfo);
    const response = yield call(deliverOrderRequest, payload.payload, userInfo);
    yield put(payOrderSuccess(response.data));
  } catch (error) {
    yield put(
      payOrderError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

export function* handleOrderDeliverRequest(payload) {
  try {
    const userInfo = yield select(selectors.userInfo);
    const response = yield call(deliverOrderRequest, payload.payload, userInfo);
    yield put(deliverOrderSuccess(response.data));
  } catch (error) {
    yield put(
      deliverOrderError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

export function* handlerGetOrderList() {
  try {
    const userInfo = yield select(selectors.userInfo);
    const response = yield call(orderListRequest, userInfo);
    yield put(getOrderListSuccess(response.data));
  } catch (error) {
    yield put(
      getOrderListError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

export function* handleGetUserList() {
  try {
    const userInfo = yield select(selectors.userInfo);
    const response = yield call(requestUserList, userInfo);
    yield put(listUsersSuccess(response.data));
  } catch (error) {
    yield put(
      listUsersError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

export function* handleCreateProductReview(payload) {
  try {
    const userInfo = yield select(selectors.userInfo);
    const response = yield call(
      productReviewCreateRequest,
      payload.payload,
      userInfo
    );
    yield put(createProductReviewSuccess(response.data));
  } catch (error) {
    yield put(
      createProductReviewError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

export function* handleGetTopProduct() {
  try {
    const response = yield call(getTopProductsRequest);
    yield put(getTopProductsSuccess(response.data));
  } catch (error) {
    yield put(
      getTopProductsError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

export function* handleUserDelete(payload) {
  try {
    const userInfo = yield select(selectors.userInfo);
    const response = yield call(requestUserDelete, payload.payload, userInfo);
    yield put(deleteUserSuccess(response.data));
  } catch (error) {
    yield put(
      deleteUserError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

export function* handleProductDelete(payload) {
  try {
    const userInfo = yield select(selectors.userInfo);
    const response = yield call(
      requestProductDelete,
      payload.payload,
      userInfo
    );
    yield put(deleteProductSuccess(response.data));
  } catch (error) {
    yield put(
      deleteProductError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

export function* handleCreateProduct(payload) {
  try {
    const userInfo = yield select(selectors.userInfo);
    const response = yield call(
      requestProductCreate,
      payload.payload,
      userInfo
    );
    yield put(createProductSuccess(response.data));
  } catch (error) {
    yield put(
      createProductError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

export function* handleUpdateProduct(payload) {
  try {
    const userInfo = yield select(selectors.userInfo);
    const response = yield call(
      requestProductUpdate,
      payload.payload,
      userInfo
    );
    yield put(updateProductSuccess(response.data));
  } catch (error) {
    yield put(
      updateProductError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

export function* handleGetAllOrderList() {
  try {
    const userInfo = yield select(selectors.userInfo);
    const response = yield call(orderAllListRequest, userInfo);
    yield put(getOrderAllListSuccess(response.data));
  } catch (error) {
    yield put(
      getOrderAllListError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}

export function* handleUserUpdate(payload) {
  try {
    const userInfo = yield select(selectors.userInfo);
    const response = yield call(userUpdateRequest, payload.payload, userInfo);
    yield put(updateUserSuccess(response.data));
  } catch (error) {
    yield put(
      updateUserError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
}
