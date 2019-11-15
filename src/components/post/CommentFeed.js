import React, { useContext } from 'react';
import CommentItem from './CommentItem';

import { CommentContext } from '../../contexts/CommentContext';

const CommentFeed = (props) => {
	const { comments } = useContext(CommentContext);

	return comments.map(comment =>
		<CommentItem key={comment.id} comment={comment} postId={props.postId} />
	)
}

export default CommentFeed;