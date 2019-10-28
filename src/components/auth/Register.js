import React, { useState } from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import { SIGNUP_MUTATION } from "../gql/Mutations";

import { useMutation, useApolloClient } from '@apollo/react-hooks';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onChange = e => {
    if (e.target.name === "name") setName(e.target.value);
    else if (e.target.name === "email") setEmail(e.target.value);
    else if (e.target.name === "password") setPassword(e.target.value);
    else if (e.target.name === "password2") setPassword2(e.target.value);
  };


  const client = useApolloClient();

  client.writeData({ data: { isAuth: true } })

  const [signUp, { data }] = useMutation(SIGNUP_MUTATION);


  return (

    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">
              Create your DevConnector account
                </p>
            <form
              onSubmit={e => {
                e.preventDefault();
                const userData = {
                  name,
                  email,
                  password,
                  password2
                }
                signUp({ variables: userData });
              }}
              noValidate
            >
              <TextFieldGroup
                placeholder="Name"
                name="name"
                value={name}
                onChange={onChange}
              // error={errors.name}
              />
              <TextFieldGroup
                placeholder="Email Address"
                name="email"
                type="email"
                value={email}
                onChange={onChange}
                // error={errors.email}
                info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
              />
              <TextFieldGroup
                placeholder="Password"
                name="password"
                type="password"
                value={password}
                onChange={onChange}
              // error={errors.password}
              />
              <TextFieldGroup
                placeholder="Confirm Password"
                name="password2"
                type="password"
                value={password2}
                onChange={onChange}
              // error={errors.password2}
              />
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
