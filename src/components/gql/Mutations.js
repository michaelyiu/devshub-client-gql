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
			email
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

const CREATE_EDUCATION = gql`
	mutation createEducation($school: String!, $degree: String!, $fieldOfStudy: String!, $from: String!, $to: String, $current: Boolean, $description: String ){
		createEducation(school: $school, degree: $degree, fieldOfStudy: $fieldOfStudy, from: $from, to: $to, current: $current, description:$description){
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
`

const CREATE_EXPERIENCE = gql`
	mutation createExperience($title: String!, $company: String!, $location: String!, $from: String!, $to: String, $current: Boolean, $description: String ){
		createExperience(title: $title, company: $company, location: $location, from: $from, to: $to, current: $current, description:$description){
			id
			title
			company
			location
			from
			to
			current
			description
		}
	}
`


export {
	ISLOGGEDIN_MUTATION,
	SIGNIN_MUTATION,
	SIGNUP_MUTATION,
	CREATE_EDUCATION,
	CREATE_EXPERIENCE,
};