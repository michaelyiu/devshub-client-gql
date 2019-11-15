import { gql } from "apollo-boost";

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
`;

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
`;

const DELETE_EXPERIENCE = gql`
	mutation deleteExperience($id: ID!){
		deleteExperience(id: $id)
	}
`;

export {
	CREATE_EXPERIENCE,
	EDIT_EXPERIENCE,
	DELETE_EXPERIENCE
}