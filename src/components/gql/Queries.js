import { gql } from "apollo-boost";

const CURRENT_USER_QUERY = gql`
	query ($email: String!) {
		user(email: $email) {
    	name 
			email
			avatar
		}
  }
`;

const ISLOGGEDIN_QUERY = gql`
	query {
		isAuth @client
	}
`;

export {
	ISLOGGEDIN_QUERY,
	CURRENT_USER_QUERY,
};


