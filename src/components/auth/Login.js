import React, { useContext } from "react";
import { Redirect } from 'react-router';
import { useForm } from '../../hooks';
import Spinner from '../common/Spinner';

import { AuthContext } from '../../contexts/AuthContext';
import TextFieldGroup from "../common/TextFieldGroup";

import { SIGNIN_MUTATION } from "../gql/Mutations";
import { useMutation } from '@apollo/react-hooks';

const Login = () => {
  const { values, handleChange, handleSubmit } = useForm(() => {
    signIn()
  }, {
    email: '',
    password: ''
  })

  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  const [signIn, { loading, data, error }] = useMutation(
    SIGNIN_MUTATION,
    {
      variables: values,
      onCompleted(data) {
        if (data && data.signIn)
          toggleAuth();
      },

    }
  );

  let errors;
  if (!loading && error) {
    errors = error.graphQLErrors[0].extensions.exception.errors;
  }
  // if (loading) return <Spinner />
  // if (error) return <Error message={error.message} />

  // Store token if login is successful
  if (data) {
    window.localStorage.setItem('token', data.signIn.token)
    window.localStorage.setItem('email', data.signIn.email)
    // Redirect to home page
    return <Redirect to='/dashboard' />
  }
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

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

              <form onSubmit={handleSubmit}>
                <TextFieldGroup
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  error={errors && errors.email ? errors.email : null}
                />

                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  error={errors && errors.password ? errors.password : null}
                />

                <input type="submit" className="btn btn-info btn-block mt-4" />

              </form>
              {/* supress warning for non usage for now */}
              {error && <p data-testid="login-error">{error.message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Login;
