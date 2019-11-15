import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";

import { useQuery } from '@apollo/react-hooks';
import { GET_POSTS } from "../../gql/Queries/posts";

import { PostContext } from '../../contexts/PostContext';

import PostForm from './PostForm';
import PostFeed from './PostFeed';
import Spinner from './../common/Spinner';

const Posts = () => {
	const { setPosts } = useContext(PostContext)
	const history = useHistory();

	const {
		data,
		loading,
		error
	} = useQuery(
		GET_POSTS,
		{
			onCompleted() {
				setPosts(data.posts);
			}
		}
	);

	let postContent;

	// if posts is loading , then show loading spinner
	if (loading) {
		postContent = <Spinner />
	} else if (error) {
		history.push('/not-found');
	} else {
		postContent = <PostFeed posts={data.posts} />
	}

	return (
		<div className="feed">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<PostForm />
						{postContent}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Posts;