import { createReducer } from "@reduxjs/toolkit";
import {
  getCurrentUserError,
  getCurrentUserSuccess,
  loginError,
  loginSuccess,
  logoutError,
  logoutSuccess,
  registerError,
  registerSuccess,
} from "../auth/authActions";
import {
  addContactError,
  addContactSuccess,
  fetchContactsError,
  fetchContactsSuccess,
  removeContactError,
  removeContactSuccess,
} from "../contacts/contactsActions";

const setError = (_, { payload }) => payload;
const resetError = () => "";

export const error = createReducer("", {
  [getCurrentUserError]: setError,
  [getCurrentUserSuccess]: resetError,

  [registerError]: setError,
  [registerSuccess]: resetError,

  [loginError]: setError,
  [loginSuccess]: resetError,

  [logoutError]: setError,
  [logoutSuccess]: resetError,

  [fetchContactsError]: setError,
  [fetchContactsSuccess]: resetError,

  [addContactError]: setError,
  [addContactSuccess]: resetError,

  [removeContactError]: setError,
  [removeContactSuccess]: resetError,
});
