import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/authOperations";
import styles from "./RegisterForm.module.css";

const initialState = {
  name: "",
  email: "",
  password: "",
  repeatedPassword: "",
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, repeatedPassword } = state;

    if (password !== repeatedPassword) {
      alert("Passwords is not matching!");
      return;
    }

    const newUser = { name, email, password };

    dispatch(registerUser(newUser));
    console.log(newUser);
    setState(initialState);
  };

  return (
    <section className={styles.registration__section}>
      <h1 className={styles.registration__title}>Registration</h1>
      <form className={styles.registration__form} onSubmit={onFormSubmit}>
        <label className={styles.registration__label} htmlFor="name">
          Username:
        </label>
        <input
          className={styles.registration__input}
          type="text"
          name="name"
          value={state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Username может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={onHandleChange}
        />
        <label className={styles.registration__label} htmlFor="email">
          E-mail:
        </label>
        <input
          className={styles.registration__input}
          type="text"
          name="email"
          value={state.email}
          required
          onChange={onHandleChange}
        />
        <label className={styles.registration__label} htmlFor="password">
          Password:
        </label>
        <input
          className={styles.registration__input}
          type="password"
          name="password"
          value={state.password}
          required
          onChange={onHandleChange}
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
          value={state.repeatedPassword}
          required
          onChange={onHandleChange}
        />
        <button className={styles.registration__button} type="submit">
          Register
        </button>
      </form>
    </section>
  );
};

export default RegisterForm;
