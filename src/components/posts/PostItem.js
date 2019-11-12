import React from 'react'
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import { ADD_LIKE, REMOVE_LIKE } from "../gql/Mutations";
import { useMutation } from '@apollo/react-hooks';

const PostItem = (props) => {
	const { post } = props;
	const { id: authUserId } = JSON.parse(localStorage.getItem('auth'));


	const [addLike] = useMutation(ADD_LIKE);
	const [removeLike] = useMutation(REMOVE_LIKE);





	// 	onDeleteClick = (id) => {
	// 		this.props.deletePost(id);
	// 	}
	// const onLikeClick = (id) => {
	// 	addLike({ variables: id });
	// }
	// const onDislikeClick = (id) => {
	// 	removeLike({ variables: id });
	// }
	const onToggleLikeClick = (post_id) => {
		if (post.likes.find(like => like.user === authUserId)) {
			removeLike({ variables: { post_id } });
			// 			this.props.removeLike(id);
		} else {
			addLike({ variables: { post_id } });
			// 			this.props.addLike(id);
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
						{/* {post.user === auth.user.id ? (
							<button onClick={() => this.onDeleteClick(post._id)} type="button" className="btn btn-danger mr-1">
								<i className="fas fa-times"></i>
							</button>
						) : null} */}
					</span>



					{/*
					{showActions ? (<span>
						<button onClick={() => this.onToggleLikeClick(post._id)} type="button" className="btn btn-light mr-1">
							<i className={classnames('fas fa-thumbs-up', {
								'text-info': this.findUserLike(post.likes)
							})}></i>
							<span className="badge badge-light">{post.likes.length}</span>
						</button>
						<Link to={`/post/${post._id}`} className="btn btn-info mr-1">
							Comments
	            </Link>
						{post.user === auth.user.id ? (
							<button onClick={() => this.onDeleteClick(post._id)} type="button" className="btn btn-danger mr-1">
								<i className="fas fa-times"></i>
							</button>
						) : null}
					</span>) : null} */}
				</div>
			</div>
		</div >
	)
}

export default PostItem;