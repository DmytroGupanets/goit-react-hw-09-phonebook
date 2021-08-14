import { createReducer } from "@reduxjs/toolkit";
import { logoutSuccess } from "../auth/authActions";
import {
  addContactSuccess,
  fetchContactsSuccess,
  removeContactSuccess,
} from "./contactsActions";

export const contactsItemReducer = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,

  [addContactSuccess]: (state, { payload }) => [...state, payload],

  [removeContactSuccess]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),

  [logoutSuccess]: () => [],
});
