import { createReducer } from "@reduxjs/toolkit";
import { logoutSuccess } from "../auth/authActions";
import { updateFilterValue } from "./filterActions";

const contactsFilterReducer = createReducer("", {
  [updateFilterValue]: (_, { payload }) => payload,
  [logoutSuccess]: () => "",
});

export default contactsFilterReducer;
