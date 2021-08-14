import { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/auth/authOperations";
import styles from "./LoginForm.module.css";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.loginUser(this.state);

    this.setState({ name: "", password: "" });
  };

  render() {
    return (
      <section className={styles.login__section}>
        <h1 className={styles.login__title}>Login</h1>
        <form className={styles.login__form} onSubmit={this.onFormSubmit}>
          <label className={styles.login__label} htmlFor="email">
            E-mail:
          </label>
          <input
            className={styles.login__input}
            type="text"
            name="email"
            value={this.state.email}
            required
            onChange={this.onHandleChange}
          />

          <label className={styles.login__label} htmlFor="password">
            Password:
          </label>
          <input
            className={styles.login__input}
            type="password"
            name="password"
            value={this.state.password}
            required
            onChange={this.onHandleChange}
          />

          <button className={styles.login__button} type="submit">
            Login
          </button>
        </form>
      </section>
    );
  }
}

export default connect(null, { loginUser })(LoginPage);
