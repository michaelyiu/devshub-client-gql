import { gql } from "apollo-boost";

const ISLOGGEDIN_MUTATION = gql`
	mutation {
		changeValue @client
	}
`

const SIGNIN_MUTATION = gql`
	mutation signIn($email: String!, $password: String!) {
		signIn(email: $email, password: $password){
    	token
		}
  }
`;

const SIGNUP_MUTATION = gql`
	mutation signUp($name: String!, $email: String!, $password: String!, $password2: String!) {
		signUp(name: $name, email: $email, password: $password, password2: $password2){
    	email
		}
  }
`

export {
	ISLOGGEDIN_MUTATION,
	SIGNIN_MUTATION,
	SIGNUP_MUTATION
};