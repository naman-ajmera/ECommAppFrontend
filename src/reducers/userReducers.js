import {
  USER_LOGIN_REQUEST_SUCCESS,
  USER_LIST_RESET,
  USER_DETAILS_RESET,
  USER_UPDATE_PROFILE_REQUEST_SUCCESS,
  USER_UPDATE_PROFILE_REQUEST_ERROR,
  USER_LOGIN_REQUEST_ERROR,
  USER_DETAILS_REQUEST_SUCCESS,
  USER_DETAILS_REQUEST_ERROR,
  USER_LOGOUT,
  USER_REGISTER_REQUEST_SUCCESS,
  USER_REGISTER_REQUEST_ERROR,
  USER_REGISTER_REQUEST,
  USER_LIST_REQUEST_SUCCESS,
  USER_LIST_REQUEST_ERROR,
  USER_DELETE_REQUEST_SUCCESS,
  USER_DELETE_REQUEST_ERROR,
  USER_UPDATE_PROFILE_RESET,
  USER_UPDATE_REQUEST_SUCCESS,
  USER_UPDATE_REQUEST_ERROR,
  USER_UPDATE_RESET,
} from "../constants/userConstants";

export const userLoginReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_REQUEST_ERROR:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      localStorage.removeItem("userInfo");
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_REQUEST_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_REQUEST_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_REQUEST_ERROR:
      return { loading: false, error: action.payload };
    case USER_DETAILS_RESET:
      return { user: {} };
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_UPDATE_PROFILE_REQUEST_ERROR:
      return { loading: false, error: action.payload };
    case USER_UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

export const userListReducer = (
  state = { loading: true, users: [] },
  action
) => {
  switch (action.type) {
    case USER_LIST_REQUEST_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_LIST_REQUEST_ERROR:
      return { loading: false, error: action.payload };
    case USER_LIST_RESET:
      return { users: [] };
    default:
      return state;
  }
};

export const userDeleteReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST_SUCCESS:
      return { loading: false, success: true };
    case USER_DELETE_REQUEST_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userUpdateReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST_SUCCESS:
      return { loading: false, success: true };
    case USER_UPDATE_REQUEST_ERROR:
      return { loading: false, error: action.payload };
    case USER_UPDATE_RESET:
      return { user: {} };
    default:
      return state;
  }
};
