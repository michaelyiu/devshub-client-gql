import React, { useContext } from 'react';
import { useForm } from '../../hooks';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/react-hooks';
import { CREATE_EDUCATION } from "../../gql/Mutations/education";

import { EducationContext } from '../../contexts/EducationContext';

import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import Spinner from '../common/Spinner';

const AddEducation = () => {
	const { addEducation } = useContext(EducationContext);

	const { values, handleChange, handleSubmit } = useForm(() => {
		addEducation(values)
		createEducation();
	}, {
		school: '',
		degree: '',
		fieldOfStudy: '',
		from: '',
		to: '',
		current: false,
		description: '',
		// errors: {},
		disabled: false
	})

	const [createEducation, { loading, data, error }] = useMutation(
		CREATE_EDUCATION,
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
		values.id = data.createEducation.id
		return <Redirect to='/dashboard' />
	}

	return (
		<div className="add-education">
			<div className="container">
				<div className="row">
					<div className="col-md-8 m-auto">
						<Link to="/dashboard" className="btn btn-light">
							Go Back
              </Link>
						<h1 className="display-4 text-center">Add Education</h1>
						<p className="lead text-center">Add any school, bootcamp etc that you have attended</p>
						<small className="d-block pb3">* = required fields</small>
						<form onSubmit={handleSubmit}>
							<TextFieldGroup
								placeholder="* School"
								name="school"
								value={values.school}
								onChange={handleChange}
								error={errors && errors.school ? errors.school : null}
							/>
							<TextFieldGroup
								placeholder="* Degree of Certification"
								name="degree"
								value={values.degree}
								onChange={handleChange}
								error={errors && errors.degree ? errors.degree : null}
							/>
							<TextFieldGroup
								placeholder="Field of Study"
								name="fieldOfStudy"
								value={values.fieldOfStudy}
								onChange={handleChange}
								error={errors && errors.fieldOfStudy ? errors.fieldOfStudy : null}
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
								placeholder="Program Description"
								name="description"
								value={values.description}
								onChange={handleChange}
								error={errors && errors.description ? errors.description : null}
								info="Tell us about the program you were in"
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


export default AddEducation;