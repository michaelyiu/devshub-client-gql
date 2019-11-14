import React, { createContext, useState, useEffect } from 'react'

export const PostContext = createContext();

const PostContextProvider = (props) => {
	const [posts, setPosts] = useState(() => {
		const localData = localStorage.getItem('post');
		return localData ? JSON.parse(localData) : [];
	})

	const createLike = (post, like) => {
		const postUpdateIndex = posts.findIndex(postsChild => postsChild.id === post.id);
		post.likes.push(like);

		posts[postUpdateIndex] = post;
		setPosts([...posts]);
	}

	const deleteLike = (post, likeToDelete) => {
		const postUpdateIndex = posts.findIndex(postsChild => postsChild.id === post.id);

		let updatedLikes = post.likes.filter(like => {
			return like.id !== likeToDelete.id
		})
		post.likes = updatedLikes;
		posts[postUpdateIndex] = post;
		setPosts([...posts]);

	}

	const clearPost = () => {
		setPosts([]);
	}

	useEffect(() => {
		localStorage.setItem('posts', JSON.stringify(posts))
	}, [posts])

	return (
		<PostContext.Provider value={{ posts, setPosts, clearPost, createLike, deleteLike }}>
			{props.children}
		</PostContext.Provider>
	)
}

export default PostContextProvider;