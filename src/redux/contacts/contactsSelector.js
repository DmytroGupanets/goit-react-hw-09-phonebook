import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.items;
export const getFilterValue = (state) => state.contacts.filter;
export const getLoaderCondition = (state) => state.isLoading;

export const getFilteredContacts = createSelector(
  [getContacts, getFilterValue],
  (contacts, filterValue) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);
