import React from "react";
import { Redirect } from 'react-router';
import { useForm } from '../../hooks'
import Spinner from '../common/Spinner';

import TextFieldGroup from "../common/TextFieldGroup";

import { SIGNUP_MUTATION } from "../gql/Mutations";
import { useMutation } from '@apollo/react-hooks';


const Register = () => {
  const { values, handleChange, handleSubmit } = useForm(() => {
    signUp();
  }, {
    name: '',
    email: '',
    password: '',
    password2: ''
  })


  const [signUp, { loading, data, error }] = useMutation(
    SIGNUP_MUTATION,
    {
      variables: values
    }
  );

  if (loading) return <Spinner />

  // Show error message if mutation fails
  // if (error) return <Error message={error.message} />

  if (data) {
    // Redirect to home page
    return <Redirect to='/login' />
  }

  return (

    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">
              Create your DevConnector account
                </p>
            <form onSubmit={handleSubmit} noValidate>
              <TextFieldGroup
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
              // error={errors.name}
              />
              <TextFieldGroup
                placeholder="Email Address"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                // error={errors.email}
                info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
              />
              <TextFieldGroup
                placeholder="Password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
              // error={errors.password}
              />
              <TextFieldGroup
                placeholder="Confirm Password"
                name="password2"
                type="password"
                value={values.password2}
                onChange={handleChange}
              // error={errors.password2}
              />
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
            {error && <p data-testid="login-error">{error.message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
