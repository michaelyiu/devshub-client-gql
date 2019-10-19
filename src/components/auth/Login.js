import React, { useState } from "react";
import TextFieldGroup from "../common/TextFieldGroup";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    const userData = {
      email,
      password
    };

    // Call authAction loginUser
    props.loginUser(userData);
  };

  const onChange = e => {
    if (e.target.name === "email") setEmail(e.target.value);
    else if (e.target.name === "password") setPassword(e.target.value);

    // this.setState({ [e.target.name]: e.target.value });
  };

  // const { errors } = this.state;

  return (
    <div>
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your DevConnector account
              </p>
              <form onSubmit={onSubmit} noValidate>
                <TextFieldGroup
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={email}
                  onChange={onChange}
                  // error={errors.email}
                />

                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={onChange}
                  // error={errors.password}
                />

                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
