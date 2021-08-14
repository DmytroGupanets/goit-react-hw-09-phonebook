import { combineReducers } from "redux";
import { contactsItemReducer } from "./contacts/contactsReducer";
import contactsFilterReducer from "./filter/filterReducer";

const rootReducer = combineReducers({
  items: contactsItemReducer,
  filter: contactsFilterReducer,
});

export default rootReducer;
