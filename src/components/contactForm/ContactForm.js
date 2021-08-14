import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addContactOperation,
  fetchContactsOperation,
} from "../../redux/contacts/contactsOperations";
import { getContacts } from "../../redux/contacts/contactsSelector";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = { name: "", number: "" };

  componentDidMount() {
    this.props.fetchContactsOperation();
  }

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    const contact = {
      name: this.state.name,
      number: this.state.number,
    };

    const isSameContactName = this.props.contacts.findIndex(
      (contact) => contact.name === this.state.name
    );

    const isSameContactPhone = this.props.contacts.findIndex(
      (contact) => contact.number === this.state.number
    );

    if (isSameContactName !== -1) {
      return alert(`${this.state.name} is already in contacts`);
    } else if (isSameContactPhone !== -1) {
      return alert(`Phone number ${this.state.number} is already in contacts`);
    }

    this.props.addContactOperation(contact);
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.onFormSubmit}>
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.onHandleChange}
          />
        </label>
        <label className={styles.label}>
          Phone number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.onHandleChange}
          />
        </label>
        <button className={styles.addContactBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
});

export default connect(mapStateToProps, {
  addContactOperation,
  fetchContactsOperation,
})(ContactForm);
