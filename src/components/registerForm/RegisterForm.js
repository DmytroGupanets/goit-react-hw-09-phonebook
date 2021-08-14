import { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../redux/auth/authOperations";
import styles from "./RegisterForm.module.css";

class RegisterForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    repeatedPassword: "",
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, repeatedPassword } = this.state;

    if (password !== repeatedPassword) {
      alert("Passwords is not matching!");
      return;
    }

    const newUser = { name, email, password };

    this.props.registerUser(newUser);

    this.setState({
      name: "",
      email: "",
      password: "",
      repeatedPassword: "",
    });
  };

  render() {
    return (
      <section className={styles.registration__section}>
        <h1 className={styles.registration__title}>Registration</h1>
        <form
          className={styles.registration__form}
          onSubmit={this.onFormSubmit}
        >
          <label className={styles.registration__label} htmlFor="name">
            Username:
          </label>
          <input
            className={styles.registration__input}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Username может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.onHandleChange}
          />
          <label className={styles.registration__label} htmlFor="email">
            E-mail:
          </label>
          <input
            className={styles.registration__input}
            type="text"
            name="email"
            value={this.state.email}
            required
            onChange={this.onHandleChange}
          />
          <label className={styles.registration__label} htmlFor="password">
            Password:
          </label>
          <input
            className={styles.registration__input}
            type="password"
            name="password"
            value={this.state.password}
            required
            onChange={this.onHandleChange}
          />
          <label
            className={styles.registration__label}
            htmlFor="repeatedPassword"
          >
            Repeat your password:
          </label>

          <input
            className={styles.registration__input}
            type="password"
            name="repeatedPassword"
            value={this.state.repeatedPassword}
            required
            onChange={this.onHandleChange}
          />
          <button className={styles.registration__button} type="submit">
            Register
          </button>
        </form>
      </section>
    );
  }
}

export default connect(null, { registerUser })(RegisterForm);
