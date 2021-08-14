import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import reduxStore from "./redux/store";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore.store}>
      <PersistGate
        loading={
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        }
        persistor={reduxStore.persistor}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
