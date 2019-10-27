import { gql } from "apollo-boost";

const CURRENT_USER_QUERY = gql`
	query user($email: String!) {
		user(email: $email){
    	name
			email
		}
  }
`;

const ISLOGGEDIN_QUERY = gql`
	query {
		isAuth @client
	}
`

export {
	ISLOGGEDIN_QUERY,
	CURRENT_USER_QUERY,
};


