import React, { Component } from "react";
import { auth } from "../Firebase";
import Loading from "../components/Loading/Loading";

import * as firebase from "firebase";
export default (ComposedClass, reload) => {
  class AuthenticationCheck extends Component {
    state = { loading: true };
    componentWillMount = async () => {
      const index = document.cookie.indexOf("token");
      if (index === -1) {
        this.props.history.push("/login");
      }
      this.setState({ loading: false });
    };
    render = () => {
      return this.state.loading ? (
        <Loading />
      ) : (
        <ComposedClass {...this.props} />
      );
    };
  }
  return AuthenticationCheck;
};
