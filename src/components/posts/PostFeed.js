import React, { useContext } from 'react'
import PostItem from './PostItem';
import { PostContext } from '../../contexts/PostContext';

const PostFeed = (props) => {
	const { posts } = useContext(PostContext);
	// const { posts } = props;
	return posts.map(post => <PostItem key={post.id} post={post} posts={posts} />)
}

export default PostFeed;