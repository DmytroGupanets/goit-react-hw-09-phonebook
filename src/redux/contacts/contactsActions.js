import { createAction } from "@reduxjs/toolkit";

export const fetchContactsRequest = createAction(
  "contacts/fetchContactsRequest"
);
export const fetchContactsSuccess = createAction(
  "contacts/fetchContactsSuccess"
);
export const fetchContactsError = createAction("contacts/fetchContactsError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSucces");
export const addContactError = createAction("contacts/addContactError");
export const removeContactRequest = createAction(
  "contacts/removeContacRequest"
);
export const removeContactSuccess = createAction("contacts/removeContacSucces");
export const removeContactError = createAction("contacts/removeContacError");
