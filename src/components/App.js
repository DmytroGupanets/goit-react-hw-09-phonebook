import { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../redux/auth/authOperations";
import Header from "./header/Header";
import Main from "./main/Main";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
