import React, { useContext } from 'react'
import PostItem from './PostItem';

import { PostContext } from '../../contexts/PostContext';

const PostFeed = () => {
	const { posts } = useContext(PostContext);
	return posts.map(post => <PostItem key={post.id} post={post} posts={posts} />)
}

export default PostFeed;