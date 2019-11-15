import { gql } from "apollo-boost";

export const GET_CURRENT_USER = gql`
	query ($email: String!) {
		user(email: $email) {
    	name 
			email
			avatar
		}
  }
`;