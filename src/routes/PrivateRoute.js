import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getIsAuthenticated } from "../redux/auth/authSelector";

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  key,
  ...routeProps
}) => {
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} key={key} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
