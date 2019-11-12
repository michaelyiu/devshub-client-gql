import React from 'react';
// import TextAreaFieldGroup from './../common/TextAreaFieldGroup';
// import { addPost } from './../../actions/postActions';


const PostForm = () => {
	// 	constructor(props) {
	// 		super(props);
	// 		this.state = {
	// 			text: '',
	// 			errors: {}
	// 		}
	// 	}

	// 	componentWillReceiveProps(newProps) {
	// 		if (newProps.errors) {
	// 			this.setState({ errors: newProps.errors })
	// 		}
	// 	}
	// 	onChange = (e) => {
	// 		this.setState({ [e.target.name]: e.target.value })
	// 	}

	// 	onSubmit = (e) => {
	// 		e.preventDefault();

	// 		const { user } = this.props.auth;

	// 		const newPost = {
	// 			text: this.state.text,
	// 			name: user.name,
	// 			avatar: user.avatar,
	// 		};

	// 		this.props.addPost(newPost);
	// 		this.setState({ text: '' })
	// 	}

	// 	render() {
	// 		const { errors } = this.state;

	return (
		<div className="post-form mb-3">
			<div className="card card-info">
				<div className="card-header bg-info text-white">
					Say Something! Hey! Listen!
	              </div>
				<div className="card-body">
					{/* <form onSubmit={this.onSubmit}> */}
					<div className="form-group">
						{/* <TextAreaFieldGroup
										placeholder="Create a post"
										name="text"
										value={this.state.text}
										onChange={this.onChange}
										error={errors.text}
									/> */}
					</div>
					<button type="submit" className="btn btn-dark">Submit</button>
					{/* </form> */}
				</div>
			</div>
		</div>
	)
}

export default PostForm;