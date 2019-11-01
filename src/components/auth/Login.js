import React, { useState, useContext, useEffect } from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import { AuthContext } from '../../contexts/AuthContext';

// import { SIGNIN_MUTATION, ISLOGGEDIN_MUTATION } from "../gql/Mutations";
// import { ISLOGGEDIN_QUERY, CURRENT_USER_QUERY } from "../gql/Queries";
// import { useMutation, useQuery, useLazyQuery, useApolloClient } from '@apollo/react-hooks';
// import { useHistory } from "react-router-dom";

// //defined function outside of stateless component so that its not defined every single time
// const login = (email, password) => {
//   console.log(email, password);
// }

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  // let history = useHistory();

  const onChange = e => {
    console.log("change")
    // if (e.target.name === "email") setEmail(e.target.value);
    // else if (e.target.name === "password") setPassword(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const userData = {
      email,
      password
    };

    // await signIn({ variables: userData }).then(
    //   async result => {
    //     client.cache.writeData({ data: { isAuth: true } })
    //     await localStorage.setItem('token', result.data.signIn.token);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
    // history.push("/dashboard");

    toggleAuth();
    // login(email, password);

  };
  // const client = useApolloClient();
  // const [getCurrentUser, { loading, data }] = useLazyQuery(CURRENT_USER_QUERY, {
  //   variables: {
  //     email: "onew1ng3d@hotmail.com"
  //   }
  // });

  // const [auth] = useMutation(ISLOGGEDIN_MUTATION);

  // const [signIn] = useMutation(
  //   SIGNIN_MUTATION
  // );
  //maybe set isAuth to true here via localStorage. 


  // const {
  //   data: loginQuery,
  // loading: loginLoading,
  // error: loginError
  // } = useQuery(ISLOGGEDIN_QUERY);


  // useEffect(() => {
  //   if (loginQuery && loginQuery.isAuth)
  //     history.push("/dashboard");

  // })

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
