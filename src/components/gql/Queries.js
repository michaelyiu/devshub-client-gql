import { gql } from "apollo-boost";

const CURRENT_USER_QUERY = gql`
	query user($email: String!) {
		user(email: $email){
    	name
			email
		}
  }
`;

export {
	CURRENT_USER_QUERY,
};


