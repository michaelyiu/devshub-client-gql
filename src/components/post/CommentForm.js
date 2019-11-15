import React, { useContext } from 'react'
import { useForm } from '../../hooks';
import TextAreaFieldGroup from './../common/TextAreaFieldGroup';

import { CREATE_COMMENT } from "../gql/Mutations";
import { useMutation } from '@apollo/react-hooks';

import { AuthContext } from '../../contexts/AuthContext';
import { CommentContext } from '../../contexts/CommentContext';

const CommentForm = (props) => {
	const { currentUser } = useContext(AuthContext);
	const { addComment } = useContext(CommentContext);

	const { postId } = props;

	const { values, handleChange, handleSubmit } = useForm(() => {
		createComment();
		values.text = ''
	}, {
		text: ''
	})

	const [createComment, { loading, error }] = useMutation(CREATE_COMMENT, {
		variables: {
			post_id: postId,
			text: values.text,
			name: currentUser.name,
			avatar: currentUser.avatar
		},
		onCompleted(data) {
			if (data)
				addComment(data.createComment)
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

export default CommentForm;