import React, { useContext } from 'react';
import { useForm } from '../../hooks';
import TextAreaFieldGroup from './../common/TextAreaFieldGroup';

import { CREATE_POST } from "../gql/Mutations";
import { useMutation } from '@apollo/react-hooks';

import { AuthContext } from '../../contexts/AuthContext';
import { PostContext } from '../../contexts/PostContext';



const PostForm = () => {
	const { currentUser } = useContext(AuthContext);
	const { addPost } = useContext(PostContext);

	const { values, handleChange, handleSubmit } = useForm(async () => {
		await createPost();
		//push post to context to rerender
	}, {
		text: ''
	})

	const [createPost] = useMutation(CREATE_POST, {
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

export default PostForm;