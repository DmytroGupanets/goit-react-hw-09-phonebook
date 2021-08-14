import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Homepage",
    path: "/",
    component: lazy(() =>
      import("../pages/HomePage" /* webpackChunkName: 'HomePage' */)
    ),
    exact: true,
    isPrivate: false,
    restricted: false,
  },
  {
    name: "Phonebook",
    path: "/contacts",
    component: lazy(() =>
      import("../pages/PhonebookPage" /* webpackChunkName: 'PhonebookPage' */)
    ),
    exact: false,
    redirectTo: "/",
    isPrivate: true,
    restricted: true,
  },

  {
    name: "Register",
    path: "/register",
    component: lazy(() =>
      import("../pages/RegisterPage" /* webpackChunkName: 'RegisterPage' */)
    ),
    exact: false,
    redirectTo: "/contacts",
    isPrivate: false,
    restricted: true,
  },
  {
    name: "Login",
    path: "/login",
    component: lazy(() =>
      import("../pages/LoginPage" /* webpackChunkName: 'LoginPage' */)
    ),
    exact: false,
    redirectTo: "/contacts",
    isPrivate: false,
    restricted: true,
  },
];
