import React, { useState } from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import { SIGNIN_MUTATION, ISLOGGEDIN_MUTATION } from "../gql/Mutations";
import { ISLOGGEDIN_QUERY } from "../gql/Queries";
import { useMutation, useQuery } from '@apollo/react-hooks';

//defined function outside of stateless component so that its not defined every single time
const login = (email, password) => {
  console.log(email, password);
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = e => {
    if (e.target.name === "email") setEmail(e.target.value);
    else if (e.target.name === "password") setPassword(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const userData = {
      email,
      password
    };
    test();
    signIn({ variables: userData });
    login(email, password);
  };

  // const { errors } = this.state;
  const [test, { changeValue }] = useMutation(ISLOGGEDIN_MUTATION);

  const [signIn] = useMutation(SIGNIN_MUTATION);
  // if (data && data.signIn) localStorage.setItem('token', data.signIn.token)
  //maybe set isAuth to true here via localStorage. 


  const { data, loading, error } = useQuery(ISLOGGEDIN_QUERY);

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

              <form onSubmit={onSubmit}>
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
    </div >
  );
};

export default Login;
