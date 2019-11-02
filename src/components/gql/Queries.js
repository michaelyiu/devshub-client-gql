import { gql } from "apollo-boost";

const GET_CURRENT_USER = gql`
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

const GET_PROFILE = gql`
	query ($email: String!) {
		profile(email: $email) {
			handle
    	bio
			experience {
				title
				company
				location
				from
				to
				current
				description
			}
			education {
				school
				degree
				fieldOfStudy
				from
				to
				current
				description
			}
		}
	}
`


export {
	ISLOGGEDIN_QUERY,
	GET_CURRENT_USER,
	GET_PROFILE,
};


