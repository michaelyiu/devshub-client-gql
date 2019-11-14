import React, { useContext, useState, useEffect } from 'react';
import PostForm from './PostForm';
import PostFeed from './PostFeed';
import Spinner from './../common/Spinner';

import { PostContext } from '../../contexts/PostContext';

import { GET_POSTS } from "../gql/Queries";
import { useQuery } from '@apollo/react-hooks';

const Posts = () => {
	// const [posts, setPosts] = useState([]);
	const { setPosts } = useContext(PostContext)


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