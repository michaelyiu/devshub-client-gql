import React, { useContext } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import { GET_POST } from "../../gql/Queries/posts";

import { CommentContext } from '../../contexts/CommentContext';

import PostItem from './../posts/PostItem';
import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';

import Spinner from './../common/Spinner';

const Post = () => {
	const { setComments } = useContext(CommentContext);
	const history = useHistory();

	const { id: postId } = useParams();

	const { data, loading, error } = useQuery(GET_POST, {
		variables: {
			id: postId
		},
		onCompleted() {
			setComments(data.post.comments);
		}
	});

	let post;
	let postContent;

	if (data)
		post = data.post;

	if (post === null || loading || Object.keys(post).length === 0) {
		postContent = <Spinner />
	} else if (error) {
		history.push('/not-found');

	} else {
		postContent = (<div>
			<PostItem post={post} showActions={false} />
			<CommentForm postId={post.id} />
			<CommentFeed postId={post.id} comments={post.comments} />
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