import React, { useContext } from 'react';
import { useForm } from '../../hooks';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/react-hooks';
import { CREATE_EXPERIENCE } from "../../gql/Mutations/experience";

import { ExperienceContext } from '../../contexts/ExperienceContext';

import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import Spinner from '../common/Spinner';

const AddExperience = () => {
	const { addExperience } = useContext(ExperienceContext);

	const { values, handleChange, handleSubmit } = useForm(() => {
		addExperience(values)
		createExperience();
	}, {
		company: '',
		title: '',
		location: '',
		from: '',
		to: '',
		current: false,
		description: '',
		// errors: {},
		disabled: false
	})

	const [createExperience, { loading, data, error }] = useMutation(
		CREATE_EXPERIENCE,
		{
			variables: values
		}
	)

	let errors;
	if (!loading && error) {
		errors = error.graphQLErrors[0].extensions.exception.errors;
	}

	if (loading) return <Spinner />
	if (data) {
		values.id = data.createExperience.id
		return <Redirect to='/dashboard' />
	}

	return (
		<div className="add-experience">
			<div className="container">
				<div className="row">
					<div className="col-md-8 m-auto">
						<Link to="/dashboard" className="btn btn-light">
							Go Back
						</Link>
						<h1 className="display-4 text-center">Add Experience</h1>
						<p className="lead text-center">Add any job or position that you have had in the past or current</p>
						<small className="d-block pb3">* = required fields</small>
						<form onSubmit={handleSubmit}>
							<TextFieldGroup
								placeholder="* Company"
								name="company"
								value={values.company}
								onChange={handleChange}
								error={errors && errors.company ? errors.company : null}
							/>
							<TextFieldGroup
								placeholder="* Job Title"
								name="title"
								value={values.title}
								onChange={handleChange}
								error={errors && errors.title ? errors.title : null}
							/>
							<TextFieldGroup
								placeholder="Location"
								name="location"
								value={values.location}
								onChange={handleChange}
								error={errors && errors.location ? errors.location : null}
							/>
							<h6>From Date</h6>
							<TextFieldGroup
								name="from"
								type="date"
								value={values.from}
								onChange={handleChange}
								error={errors ? errors.from : null}
							/>
							<h6>To Date</h6>
							<TextFieldGroup
								name="to"
								type="date"
								value={values.to}
								onChange={handleChange}
								error={errors ? errors.to : null}
								disabled={values.disabled ? 'disabled' : ''}
							/>
							<div className="form-check mb-4">
								<input
									type="checkbox"
									className="form-check-input"
									name="current"
									value={values.current}
									checked={values.current}
									onChange={handleChange}
									id="current"
								/>
								<label htmlFor="current" className="form-check-label">
									Current Job
                  </label>
							</div>
							<TextAreaFieldGroup
								placeholder="Job Description"
								name="description"
								value={values.description}
								onChange={handleChange}
								error={errors && errors.description ? errors.description : null}
								info="Tell us about the position"
							/>
							<input type="submit" value="Submit" className="btn btn-info btn-block mt-4" />
						</form>
						{error && <p data-testid="login-error">{error.message}</p>}
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddExperience;
