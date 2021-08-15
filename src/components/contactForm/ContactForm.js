import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContactOperation,
  fetchContactsOperation,
} from "../../redux/contacts/contactsOperations";
import { getContacts } from "../../redux/contacts/contactsSelector";
import styles from "./ContactForm.module.css";

const initialState = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);

  useEffect(() => {
    dispatch(fetchContactsOperation());
  }, [dispatch]);

  const contacts = useSelector(getContacts);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const contact = {
      name: state.name,
      number: state.number,
    };

    const isSameContactName = contacts.findIndex(
      (contact) => contact.name === state.name
    );

    const isSameContactPhone = contacts.findIndex(
      (contact) => contact.number === state.number
    );

    if (isSameContactName !== -1) {
      return alert(`${state.name} is already in contacts`);
    } else if (isSameContactPhone !== -1) {
      return alert(`Phone number ${state.number} is already in contacts`);
    }

    dispatch(addContactOperation(contact));
    setState(initialState);
  };

  return (
    <>
      <form className={styles.form} onSubmit={onFormSubmit}>
        <h2>Add new contact</h2>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={onHandleChange}
          />
        </label>
        <label className={styles.label}>
          Phone number
          <input
            className={styles.input}
            type="tel"
            name="number"
            value={state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={onHandleChange}
          />
        </label>
        <button className={styles.addContactBtn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
