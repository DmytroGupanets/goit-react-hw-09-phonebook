import React from "react";
import { connect } from "react-redux";
import ContactsListItem from "./contactsListItem/ContactsListItem";
import styles from "./ContactsList.module.css";
import {
  getFilteredContacts,
  getFilterValue,
  getLoaderCondition,
} from "../../redux/contacts/contactsSelector";
import { withRouter } from "react-router-dom";
import Loader from "react-loader-spinner";

const ContactList = ({ isLoading, filteredContacts }) => {
  return (
    <>
      {isLoading ? (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      ) : (
        <ul className={styles.contactsList}>
          {filteredContacts.map((contact) => (
            <ContactsListItem key={contact.id} {...contact} id={contact.id} />
          ))}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  filteredContacts: getFilteredContacts(state),
  filterValue: getFilterValue(state),
  isLoading: getLoaderCondition(state),
});

export default withRouter(connect(mapStateToProps)(ContactList));
