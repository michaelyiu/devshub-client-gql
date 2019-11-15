import { gql } from "apollo-boost";

const CREATE_POST = gql`
	mutation createPost($text: String! $name: String! $avatar: String!){
		createPost(text: $text, name: $name, avatar: $avatar){
			id
			avatar
			handle
			name
			text
			user
		}
	}
`;

const DELETE_POST = gql`
	mutation deletePost($id: ID!){
		deletePost(id: $id)
	}
`;

const ADD_LIKE = gql`
	mutation addLike($post_id: String!){
		addLike(post_id: $post_id){
			id
			user
		}
	}
`;

const REMOVE_LIKE = gql`
	mutation removeLike($post_id: String!){
		removeLike(post_id: $post_id){
			id
			user
		}
	}
`;

const CREATE_COMMENT = gql`
	mutation createComment($post_id: String! $text: String! $name: String! $avatar: String!){
		createComment(post_id: $post_id, text: $text, name: $name, avatar: $avatar)
		{
			id
			avatar
			handle
			name
			text
			user
		}
	}`

const DELETE_COMMENT = gql`
	mutation deleteComment($post_id: String!, $comment_id: String!){
		deleteComment(post_id: $post_id, comment_id: $comment_id)
	}
`;

export {
	CREATE_POST,
	DELETE_POST,
	ADD_LIKE,
	REMOVE_LIKE,
	CREATE_COMMENT,
	DELETE_COMMENT
}