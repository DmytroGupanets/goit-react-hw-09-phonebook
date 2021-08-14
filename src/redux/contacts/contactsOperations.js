import axios from "axios";
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from "./contactsActions";

export const fetchContactsOperation = () => async (dispatch) => {
  dispatch(fetchContactsRequest());
  try {
    let response = await axios.get("/contacts").then((res) => res.data);

    if (response.length) dispatch(fetchContactsSuccess());
    dispatch(fetchContactsSuccess(response));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

export const addContactOperation = (contact) => async (dispatch) => {
  dispatch(addContactRequest());
  try {
    const response = await axios.post("/contacts", contact);

    dispatch(addContactSuccess(response.data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

export const removeContactOperation = (id) => async (dispatch) => {
  dispatch(removeContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(removeContactSuccess(id));
  } catch (error) {
    dispatch(removeContactError(error.message));
  }
};
