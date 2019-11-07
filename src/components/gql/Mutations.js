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

const UPDATE_PROFILE = gql`
	mutation updateProfile($handle: String!, $company: String, $website: String, $location: String, $status: String, $skills: String!, $bio: String, $githubUsername: String){
		updateProfile(handle: $handle, company: $company, website: $website, location: $location, status: $status, skills: $skills, bio: $bio, githubUsername: $githubUsername){
			handle
			company
			website
			location
			status
			skills
			bio
			githubUsername
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

const EDIT_EXPERIENCE = gql`
	mutation editExperience($id: ID!, $title: String!, $company: String!, $location: String!, $from: String!, $to: String, $current: Boolean, $description: String ){
		editExperience(id: $id, title: $title, company: $company, location: $location, from: $from, to: $to, current: $current, description:$description){
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

const EDIT_EDUCATION = gql`
	mutation editEducation($id: ID!, $school: String!, $degree: String!, $fieldOfStudy: String!, $from: String!, $to: String, $current: Boolean, $description: String){
		editEducation(id: $id, school: $school, degree: $degree, fieldOfStudy: $fieldOfStudy, from: $from, to: $to, current: $current, description:$description){
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

const DELETE_EXPERIENCE = gql`
	mutation deleteExperience($id: ID!){
		deleteExperience(id: $id)
	}
`;

const DELETE_EDUCATION = gql`
	mutation deleteEducation($id: ID!){
		deleteEducation(id: $id)
	}
`;

export {
	ISLOGGEDIN_MUTATION,
	SIGNIN_MUTATION,
	SIGNUP_MUTATION,
	UPDATE_PROFILE,
	CREATE_EXPERIENCE,
	EDIT_EXPERIENCE,
	CREATE_EDUCATION,
	EDIT_EDUCATION,
	DELETE_EXPERIENCE,
	DELETE_EDUCATION
};