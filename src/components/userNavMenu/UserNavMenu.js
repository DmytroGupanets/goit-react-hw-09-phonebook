import { connect } from "react-redux";
import { logoutUser } from "../../redux/auth/authOperations";
import { getUsername } from "../../redux/auth/authSelector";
import styles from "./UserNavMenu.module.css";

const UserNavMenu = ({ username, logoutUser }) => {
  return (
    <>
      <p className={styles.nav_user}>
        Welcome, <span className={styles.nav_user__name}>{username}</span>
      </p>
      <button
        className={styles.nav_user__button}
        type="button"
        onClick={logoutUser}
      >
        Logout
      </button>
    </>
  );
};

const mapStateToProps = (state) => ({
  username: getUsername(state),
});

export default connect(mapStateToProps, { logoutUser })(UserNavMenu);
