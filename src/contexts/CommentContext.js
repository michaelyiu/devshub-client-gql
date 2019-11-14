import React, { createContext, useState, useEffect } from 'react'

export const CommentContext = createContext();

const CommentContextProvider = (props) => {
	const [comments, setComments] = useState(() => {
		const localData = localStorage.getItem('comment');
		return localData ? JSON.parse(localData) : [];
	})

	const addComment = (comment) => {
		//server does not return likes/comments on the comment so we need to set it
		setComments([comment, ...comments,])
	}

	const removeComment = (comment_id) => {
		setComments(comments.filter(comment => comment.id !== comment_id));
	}

	const clearComment = () => {
		setComments([]);
	}

	useEffect(() => {
		localStorage.setItem('comments', JSON.stringify(comments))
	}, [comments])

	return (
		<CommentContext.Provider value={{ comments, setComments, clearComment, addComment, removeComment }}>
			{props.children}
		</CommentContext.Provider>
	)
}
export default CommentContextProvider;
