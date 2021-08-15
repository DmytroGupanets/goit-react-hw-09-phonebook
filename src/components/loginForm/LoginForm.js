import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/authOperations";
import styles from "./LoginForm.module.css";

const initialState = { email: "", password: "" };

const LoginPage = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(state));
    setState(initialState);
  };

  return (
    <section className={styles.login__section}>
      <h1 className={styles.login__title}>Login</h1>
      <form className={styles.login__form} onSubmit={onFormSubmit}>
        <label className={styles.login__label} htmlFor="email">
          E-mail:
        </label>
        <input
          className={styles.login__input}
          type="text"
          name="email"
          value={state.email}
          required
          onChange={onHandleChange}
        />

        <label className={styles.login__label} htmlFor="password">
          Password:
        </label>
        <input
          className={styles.login__input}
          type="password"
          name="password"
          value={state.password}
          required
          onChange={onHandleChange}
        />

        <button className={styles.login__button} type="submit">
          Login
        </button>
      </form>
    </section>
  );
};

export default LoginPage;
