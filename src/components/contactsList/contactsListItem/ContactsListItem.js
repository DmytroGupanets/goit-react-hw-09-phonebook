import React from "react";
import { connect } from "react-redux";
import { removeContactOperation } from "../../../redux/contacts/contactsOperations";
import styles from "./ContactsListItem.module.css";

const ContactsListItem = ({ name, number, id, removeContactOperation }) => {
  const removeItem = () => {
    removeContactOperation(id);
  };
  return (
    <li className={styles.contactsItem}>
      <p className={styles.contactName}>
        {name}:<span className={styles.contactsNumber}>{number}</span>
      </p>
      <button
        className={styles.contactsButton}
        type="button"
        onClick={removeItem}
      >
        Delete
      </button>
    </li>
  );
};

export default connect(null, { removeContactOperation })(ContactsListItem);
