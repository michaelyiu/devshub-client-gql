import React, { useContext } from 'react';
import PostForm from './PostForm';
import PostFeed from './PostFeed';
import Spinner from './../common/Spinner';

import { ProfileContext } from '../../contexts/ProfileContext';

import { GET_POSTS } from "../gql/Queries";
import { useQuery } from '@apollo/react-hooks';

const Posts = () => {
	const { profile } = useContext(ProfileContext);


	const {
		data,
		loading,
		error
	} = useQuery(
		GET_POSTS
	);


	// componentDidMount() {
	// 	this.props.getPosts();
	// 	this.props.getCurrentProfile();
	// }
	// const { posts, loading } = this.props.post;
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