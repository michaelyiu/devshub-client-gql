import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom';
import PostItem from './../posts/PostItem';
import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';
import Spinner from './../common/Spinner';
// import { getPost } from './../../actions/postActions';

import { GET_POST } from "../gql/Queries";

import { useQuery } from '@apollo/react-hooks';

const Post = () => {
	const { id: postId } = useParams();

	const { data, loading, error } = useQuery(GET_POST, {
		variables: {
			id: postId
		}
	});

	let post;

	if (data)
		post = data.post;

	// const { post, loading } = this.props.post;
	let postContent;

	if (post === null || loading || Object.keys(post).length === 0) {
		postContent = <Spinner />
	} else {
		console.log(post)
		postContent = (<div>
			<PostItem post={post} showActions={false} />
			<CommentForm postId={post.id} />
			{/*<CommentFeed postId={post.id} comments={post.comments} /> */}
		</div>);
	}

	return (
		<div className="post">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<Link to="/feed" className="btn btn-light mb-3">
							Back to Feed
						</Link>
						{postContent}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Post;