import { gql } from "apollo-boost";

const GET_ALL_PROFILES = gql`
	query {
		profiles {
			handle
			company
			website
			location
			status
			skills
			bio
			githubUsername
			experience{
				title
				company
				location
				from
				to
				current
				description
			}
			education{
				school
				degree
				fieldOfStudy
				from
				to
				current
				description
			}
			user {
				name
				email
				avatar
				date
			}
		}
	}
`;


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
			status
			company
			website
			location
			skills
			githubUsername
			experience {
				id
				title
				company
				location
				from
				to
				current
				description
			}
			education {
				id
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
	GET_ALL_PROFILES
};


