import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  getCurrentUserError,
  getCurrentUserSuccess,
  loginError,
  loginSuccess,
  logoutError,
  logoutSuccess,
  registerError,
  registerSuccess,
} from "./authActions";

const initialValue = { name: "", email: "" };

const user = createReducer(initialValue, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialValue,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const isAuthenticated = createReducer(false, {
  [registerSuccess]: () => true,
  [registerError]: () => false,
  [loginSuccess]: () => true,
  [loginError]: () => false,
  [logoutError]: () => true,
  [logoutSuccess]: () => false,
  [getCurrentUserSuccess]: () => true,
  [getCurrentUserError]: () => false,
});

export const authReducer = combineReducers({
  user,
  isAuthenticated,
  token,
});
