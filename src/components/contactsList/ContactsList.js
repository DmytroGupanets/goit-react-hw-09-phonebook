import React from "react";
import { useSelector } from "react-redux";
import ContactsListItem from "./contactsListItem/ContactsListItem";
import styles from "./ContactsList.module.css";
import {
  getFilteredContacts,
  getLoaderCondition,
} from "../../redux/contacts/contactsSelector";
import Loader from "react-loader-spinner";

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(getLoaderCondition);

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

export default ContactList;
