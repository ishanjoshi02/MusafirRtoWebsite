import React, { Component } from "react";

import { FormGroup, Label, Input } from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";
import { auth } from "../../Firebase";

class Login extends Component {
  state = { email: "", password: "", error: "" };
  onChange = e => {
    switch (e.target.name) {
      case "email": {
        this.setState({ email: e.target.value });
        break;
      }
      case "password": {
        this.setState({ password: e.target.value });
        break;
      }
      default:
        break;
    }
  };
  onSubmit = e => {
    e.preventDefault();
    auth.doSignInWithEmailAndPassword(this.state).catch(e => {
      this.setState({ error: e.message });
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email address</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            id="exampleEmail"
            placeholder="Enter email"
            value={this.state.email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            onChange={this.onChange}
            name="password"
            id="examplePassword"
            placeholder="Password"
            value={this.state.password}
          />
        </FormGroup>
        <Button color="primary">Submit</Button>
        {this.state.error !== "" ? (
          <FormGroup className="has-danger">
            <Label for="error" className="control-label">
              Error
            </Label>
            <Input
              type="text"
              name="error"
              id="error"
              defaultValue={this.state.error}
            />
          </FormGroup>
        ) : null}
      </form>
    );
  }
}

export default Login;
