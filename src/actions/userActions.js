import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_REQUEST_SUCCESS,
  USER_DETAILS_REQUEST_ERROR,
  USER_DETAILS_REQUEST,
  USER_DETAILS_REQUEST_SUCCESS,
  USER_LOGIN_REQUEST_ERROR,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_REQUEST_SUCCESS,
  USER_REGISTER_REQUEST_ERROR,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_REQUEST_SUCCESS,
  USER_UPDATE_PROFILE_REQUEST_ERROR,
  USER_DETAILS_RESET,
  USER_LIST_REQUEST,
  USER_LIST_REQUEST_SUCCESS,
  USER_LIST_REQUEST_ERROR,
  USER_LIST_RESET,
  USER_DELETE_REQUEST,
  USER_DELETE_REQUEST_SUCCESS,
  USER_DELETE_REQUEST_ERROR,
  USER_UPDATE_REQUEST,
  USER_UPDATE_REQUEST_SUCCESS,
  USER_UPDATE_REQUEST_ERROR,
  USER_UPDATE_RESET,
} from "../constants/userConstants";

export const login = (data) => ({ type: USER_LOGIN_REQUEST, payload: data });

export const loginSuccess = (data) => ({
  type: USER_LOGIN_REQUEST_SUCCESS,
  payload: data,
});

export const loginError = (error) => ({
  type: USER_LOGIN_REQUEST_ERROR,
  payload: error,
});

export const logout = () => ({ type: USER_LOGOUT });

export const userDetailsReset = () => ({ type: USER_DETAILS_RESET });

export const register = (data) => ({
  type: USER_REGISTER_REQUEST,
  payload: data,
});

export const registerSuccess = (data) => ({
  type: USER_REGISTER_REQUEST_SUCCESS,
  payload: data,
});

export const registerError = (error) => ({
  type: USER_REGISTER_REQUEST_ERROR,
  payload: error,
});

export const getUserDetails = (data) => ({
  type: USER_DETAILS_REQUEST,
  payload: data,
});

export const getUserDetailsSuccess = (data) => ({
  type: USER_DETAILS_REQUEST_SUCCESS,
  payload: data,
});

export const getUserDetailsError = (error) => ({
  type: USER_DETAILS_REQUEST_ERROR,
  payload: error,
});

export const updateUserDetails = (data) => ({
  type: USER_UPDATE_PROFILE_REQUEST,
  payload: data,
});

export const updateUserDetailsSuccess = (data) => ({
  type: USER_UPDATE_PROFILE_REQUEST_SUCCESS,
  payload: data,
});

export const updateUserDetailsError = (error) => ({
  type: USER_UPDATE_PROFILE_REQUEST_ERROR,
  payload: error,
});

export const listUsers = () => ({ type: USER_LIST_REQUEST });

export const listUsersSuccess = (data) => ({
  type: USER_LIST_REQUEST_SUCCESS,
  payload: data,
});

export const listUsersError = (error) => ({
  type: USER_LIST_REQUEST_ERROR,
  payload: error,
});

export const userListReset = () => ({ type: USER_LIST_RESET });

export const deleteUser = (payload) => ({ type: USER_DELETE_REQUEST, payload });

export const deleteUserSuccess = (data) => ({
  type: USER_DELETE_REQUEST_SUCCESS,
  payload: data,
});

export const deleteUserError = (error) => ({
  type: USER_DELETE_REQUEST_ERROR,
  payload: error,
});

export const updateUser = (payload) => ({ type: USER_UPDATE_REQUEST, payload });

export const updateUserSuccess = (data) => ({
  type: USER_UPDATE_REQUEST_SUCCESS,
  payload: data,
});

export const updateUserError = (error) => ({
  type: USER_UPDATE_REQUEST_ERROR,
  payload: error,
});

export const updateUserReset = () => ({ type: USER_UPDATE_RESET });
