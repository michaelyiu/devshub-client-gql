import React, { createContext, useState, useEffect } from 'react'

export const PostContext = createContext();

const PostContextProvider = (props) => {
	const [posts, setPosts] = useState(() => {
		const localData = localStorage.getItem('post');
		return localData ? JSON.parse(localData) : [];
	})

	const addPost = (post) => {
		//server does not return likes/comments on the post so we need to set it
		post.likes = [];
		post.comments = [];
		setPosts([post, ...posts,])
	}

	const removePost = (post_id) => {
		// 1. look through posts to find a post using post_id
		setPosts(posts.filter(post => post.id !== post_id));
	}


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
		<PostContext.Provider value={{ posts, setPosts, clearPost, createLike, deleteLike, addPost, removePost }}>
			{props.children}
		</PostContext.Provider>
	)
}

export default PostContextProvider;