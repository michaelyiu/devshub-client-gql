import { gql } from "apollo-boost";

const GET_POSTS = gql`
	query {
		posts{
			id
			user
			text
			name
			handle
			avatar
			likes{
				id
				user
			}
			comments{
				text
				name
				handle
			}
		}
	}
`;

const GET_POST = gql`
	query($id: ID!){
		post(id: $id){
			id
			text
			name
			likes{
				id
				user
			}
			handle
			avatar
			comments{
				id
				user
				text
				name
				date
				handle
				avatar
			}
		}
	}
`;

export {
	GET_POSTS,
	GET_POST
}