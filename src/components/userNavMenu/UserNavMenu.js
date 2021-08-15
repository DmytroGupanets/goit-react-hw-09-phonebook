import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/auth/authOperations";
import { getUsername } from "../../redux/auth/authSelector";
import styles from "./UserNavMenu.module.css";

const UserNavMenu = () => {
  const dispatch = useDispatch();
  const username = useSelector(getUsername);

  const onHandleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <p className={styles.nav_user}>
        Welcome, <span className={styles.nav_user__name}>{username}</span>
      </p>
      <button
        className={styles.nav_user__button}
        type="button"
        onClick={onHandleLogout}
      >
        Logout
      </button>
    </>
  );
};

export default UserNavMenu;
