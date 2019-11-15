import React, { useContext } from 'react';
import { useForm } from '../../hooks';

import { useMutation } from '@apollo/react-hooks';
import { CREATE_POST } from "../../gql/Mutations/posts";

import { AuthContext } from '../../contexts/AuthContext';
import { PostContext } from '../../contexts/PostContext';

import TextAreaFieldGroup from './../common/TextAreaFieldGroup';

const PostForm = () => {
	const { currentUser } = useContext(AuthContext);
	const { addPost } = useContext(PostContext);

	const { values, handleChange, handleSubmit } = useForm(() => {
		createPost();
		values.text = ''
	}, {
		text: ''
	})

	const [createPost, { loading, error }] = useMutation(CREATE_POST, {
		variables: {
			text: values.text,
			name: currentUser.name,
			avatar: currentUser.avatar
		},
		onCompleted(data) {
			if (data)
				addPost(data.createPost)
		}
	})

	let errors;
	if (!loading && error) {
		errors = error.graphQLErrors[0].extensions.exception.errors;
	}

	return (
		<div className="post-form mb-3">
			<div className="card card-info">
				<div className="card-header bg-info text-white">
					Say Something! Hey! Listen!
	              </div>
				<div className="card-body">
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<TextAreaFieldGroup
								placeholder="Create a post"
								name="text"
								value={values.text}
								onChange={handleChange}
								error={errors && errors.text ? errors.text : null}
							/>
						</div>
						<button type="submit" className="btn btn-dark">Submit</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default PostForm;