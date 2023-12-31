import actionTypes from "./actionTypes";

export const addUserSuccess = () => ({
  type: actionTypes.ADD_USER_SUCCESS,
});

export const userLoginSuccess = (userInfo) => ({
  type: actionTypes.USER_LOGIN_SUCCESS,
  userInfo: userInfo,
});

export const userLogout = () => ({
  type: actionTypes.USER_LOGOUT,
});

export const userGetGenders = (payload) => ({
  type: actionTypes.USER_GET_GENDER,
  payload: payload,
});
