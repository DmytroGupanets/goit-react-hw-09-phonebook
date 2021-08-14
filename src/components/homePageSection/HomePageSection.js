import styles from "./HomePageSection.module.css";

const HomePageSection = () => {
  return (
    <section>
      <h1 className={styles.main_page__logo}>MyPhonebook</h1>
      <p className={styles.main_page__text}>
        Welcome! Please, login or register new account to continue.
      </p>
    </section>
  );
};

export default HomePageSection;
