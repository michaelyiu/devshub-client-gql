
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CommentContext } from '../../contexts/CommentContext';

import { DELETE_COMMENT } from "../gql/Mutations";
import { useMutation } from '@apollo/react-hooks';

const CommentItem = (props) => {
	const { removeComment } = useContext(CommentContext);
	const { postId, comment } = props;
	const { id: authUserId } = JSON.parse(localStorage.getItem('auth'));

	const [deleteComment] = useMutation(DELETE_COMMENT);

	const onDeleteClick = (post_id, comment_id) => {
		deleteComment({ variables: { post_id, comment_id } });
		removeComment(comment_id);
	}

	return (
		<div className="card card-body mb-3">
			<div className="row">
				<div className="col-md-2">
					<Link to={`/profile/${comment.handle}`}>
						<img className="rounded-circle d-none d-md-block" src={comment.avatar} alt="" />
					</Link>
					<br />
					<p className="text-center">{comment.name}</p>
				</div>
				<div className="col-md-10">
					<p className="lead">{comment.text}</p>
					{comment.user === authUserId ? (
						<button onClick={() => onDeleteClick(postId, comment.id)} type="button" className="btn btn-danger mr-1">
							<i className="fas fa-times"></i>
						</button>
					) : null}
				</div>
			</div>
		</div>
	)
}

export default CommentItem;