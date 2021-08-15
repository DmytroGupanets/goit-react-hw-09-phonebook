import { Switch } from "react-router-dom";
import { Suspense } from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import PublicRoute from "../../routes/PublicRoute";
import PrivateRoute from "../../routes/PrivateRoute";
import Loader from "react-loader-spinner";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles.main__section}>
      <Suspense
        fallback={
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        }
      >
        <Switch>
          {mainRoutes.map((route) =>
            route.isPrivate ? (
              <PrivateRoute {...route} key={route.path} />
            ) : (
              <PublicRoute {...route} key={route.path} />
            )
          )}

          <PrivateRoute
            path="/goit-react-hw-08-phonebook"
            redirect="/"
            restricted
          />
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;
