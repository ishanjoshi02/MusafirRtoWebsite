import React, { Component } from "react";
import { auth } from "../Firebase";
import Loading from "../components/Loading/Loading";

export default (ComposedClass, reload) => {
  class AuthenticationCheck extends Component {
    state = { loading: true };
    componentWillMount = () => {
      // get current user from firebase
      const user = auth.getUser();
      if (!user) {
        this.setState({ loading: false });
        this.props.history.push("/login");
      }
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
