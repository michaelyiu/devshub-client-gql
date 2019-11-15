import React, { useContext } from 'react'
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { PostContext } from '../../contexts/PostContext';

import { ADD_LIKE, REMOVE_LIKE, DELETE_POST } from "../gql/Mutations";
import { useMutation } from '@apollo/react-hooks';

const PostItem = (props) => {
	const { createLike, deleteLike, removePost } = useContext(PostContext);
	const { post } = props;
	const { id: authUserId } = JSON.parse(localStorage.getItem('auth'));

	const [addLike] = useMutation(ADD_LIKE, {
		onCompleted({ addLike }) {
			createLike(post, addLike)
		}
	});

	const [removeLike] = useMutation(REMOVE_LIKE, {
		onCompleted({ removeLike }) {
			deleteLike(post, removeLike)
		}
	});

	const [deletePost] = useMutation(DELETE_POST);

	const onDeleteClick = (post_id) => {
		deletePost({ variables: { id: post_id } });
		removePost(post_id);
	}

	const onToggleLikeClick = (post_id) => {
		if (post.likes.find(like => like.user === authUserId)) {
			removeLike({ variables: { post_id } });
		} else {
			addLike({ variables: { post_id } });
		}
	}

	const findUserLike = (likes) => {
		if (likes.filter(like => like.user === authUserId).length > 0) {
			return true;
		} else {
			return false;
		}
	}

	return (
		<div className="card card-body mb-3">
			<div className="row">
				<div className="col-md-2">
					<Link to={`/profile/${post.handle}`}>
						<img className="rounded-circle d-none d-md-block" src={post.avatar}
							alt="" />
					</Link>
					<br />
					<p className="text-center">{post.name}</p>
				</div>
				<div className="col-md-10">
					<p className="lead">{post.text}</p>

					<span>
						<button onClick={() => onToggleLikeClick(post.id)} type="button" className="btn btn-light mr-1">
							<i className={classnames('fas fa-thumbs-up', {
								'text-info': findUserLike(post.likes)
							})}></i>
							<span className="badge badge-light">{post.likes.length}</span>
						</button>
						<Link to={`/post/${post.id}`} className="btn btn-info mr-1">
							Comments
						</Link>
						{post.user === authUserId ? (
							<button onClick={() => onDeleteClick(post.id)} type="button" className="btn btn-danger mr-1">
								<i className="fas fa-times"></i>
							</button>
						) : null}
					</span>
				</div>
			</div>
		</div >
	)
}

export default PostItem;