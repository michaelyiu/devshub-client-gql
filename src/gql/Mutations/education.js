import { gql } from "apollo-boost";

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
`;



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
`;



const DELETE_EDUCATION = gql`
	mutation deleteEducation($id: ID!){
		deleteEducation(id: $id)
	}
`;



export {
	CREATE_EDUCATION,
	EDIT_EDUCATION,
	DELETE_EDUCATION,
};