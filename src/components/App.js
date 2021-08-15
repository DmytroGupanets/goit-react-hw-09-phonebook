import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../redux/auth/authOperations";
import Header from "./header/Header";
import Main from "./main/Main";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
