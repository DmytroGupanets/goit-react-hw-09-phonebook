import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsAuthenticated } from "../../redux/auth/authSelector";
import AuthNav from "../authNav/AuthNav";
import UserNavMenu from "../userNavMenu/UserNavMenu";
import styles from "./Header.module.css";

const Header = ({ isAuthenticated }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <NavLink
          className={styles.logo__link}
          activeClassName={styles.logo__link_active}
          to="/contacts"
        >
          My contacts
        </NavLink>

        <div className={styles.user__wrapper}>
          {isAuthenticated ? <UserNavMenu /> : <AuthNav />}
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Header);
