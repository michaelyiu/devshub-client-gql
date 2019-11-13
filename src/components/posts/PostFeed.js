import React from 'react'
import PostItem from './PostItem';
const PostFeed = (props) => {
	const { posts } = props;
	return posts.map(post => <PostItem key={post.id} post={post} posts={posts} />)
}

export default PostFeed;