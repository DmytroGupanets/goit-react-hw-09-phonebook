import { createReducer } from "@reduxjs/toolkit";
import {
  getCurrentUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  loginError,
  loginRequest,
  loginSuccess,
  logoutError,
  logoutRequest,
  logoutSuccess,
  registerError,
  registerRequest,
  registerSuccess,
} from "../auth/authActions";
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  removeContactError,
  removeContactRequest,
  removeContactSuccess,
} from "../contacts/contactsActions";

export const loader = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,

  [getCurrentUserRequest]: () => true,
  [getCurrentUserSuccess]: () => false,
  [getCurrentUserError]: () => false,
  [registerRequest]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,
  [loginRequest]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,
  [logoutRequest]: () => true,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
});
