import React, { useState, useEffect } from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import { SIGNIN_MUTATION, ISLOGGEDIN_MUTATION } from "../gql/Mutations";
import { ISLOGGEDIN_QUERY } from "../gql/Queries";
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useHistory } from "react-router-dom";

//defined function outside of stateless component so that its not defined every single time
const login = (email, password) => {
  console.log(email, password);
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

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
    signIn({ variables: userData });
    auth();
    login(email, password);
    // console.log("checkauth", data)

    // if ()
  };

  const [auth, { changeValue }] = useMutation(ISLOGGEDIN_MUTATION);

  const [signIn] = useMutation(SIGNIN_MUTATION);
  //maybe set isAuth to true here via localStorage. 


  const { data, loading, error } = useQuery(ISLOGGEDIN_QUERY);

  useEffect(() => {
    if (data && data.isAuth)
      history.push("/dashboard");
  })

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
