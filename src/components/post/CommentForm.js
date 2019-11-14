import React from 'react'
import { useForm } from '../../hooks';
import TextAreaFieldGroup from './../common/TextAreaFieldGroup';
// import { addComment } from './../../actions/postActions';

const CommentForm = () => {
	const { values, handleChange, handleSubmit } = useForm(() => {
	}, {
		text: ''
	})
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		text: '',
	// 		errors: {}
	// 	}
	// }

	// componentWillReceiveProps(newProps) {
	// 	if (newProps.errors) {
	// 		this.setState({ errors: newProps.errors })
	// 	}
	// }

	// onSubmit = (e) => {
	// 	e.preventDefault();

	// 	const { user } = this.props.auth;
	// 	const { postId } = this.props;


	// 	const newComment = {
	// 		text: this.state.text,
	// 		name: user.name,
	// 		avatar: user.avatar
	// 	};

	// 	this.props.addComment(postId, newComment);
	// 	this.setState({ text: '' })
	// }




	return (
		<div className="post-form mb-3">
			<div className="card card-info">
				<div className="card-header bg-info text-white">
					Make a comment! I dare you..
          </div>
				<div className="card-body">
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<TextAreaFieldGroup
								placeholder="Reply to post"
								name="text"
								value={values.text}
								onChange={handleChange}
							// error={errors.text}
							/>
						</div>
						<button type="submit" className="btn btn-dark">Submit</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default CommentForm;