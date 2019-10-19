// import React from "react";
import { gql } from "apollo-boost";

const SIGNIN_MUTATION = gql`
	mutation signIn($email: String!, $password: String!) {
		signIn(email: $email, password: $password){
    	token
		}
  }
`;

// const SignIn = () => {
// 	const { loading, error, data } = useMutation(signInObject);

// 	console.log(data);
// 	return data;
// 	// if (loading) return <p>Loading...</p>;
// 	// if (error) return <p>Error :(</p>;
// 	// return <div>{data}</div>;
// };

export default SIGNIN_MUTATION;