import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <>
      <NavLink
        className={styles.header__link}
        activeClassName={styles.header__link_active}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={styles.header__link}
        activeClassName={styles.header__link_active}
        to="/login"
      >
        Login
      </NavLink>
    </>
  );
};

export default AuthNav;
