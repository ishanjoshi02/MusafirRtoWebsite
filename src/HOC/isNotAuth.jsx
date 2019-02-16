import React, { Component } from "react";
import { auth } from "../Firebase";
import Loading from "../components/Loading/Loading";

export default (ComposedClass, reload) => {
  class NonAuthenticationCheck extends Component {
    state = { loading: true };
    componentWillMount = () => {
      const user = auth.getUser();
      this.setState({ loading: false });
      if (user) {
        this.props.history.push("/");
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
  return NonAuthenticationCheck;
};
