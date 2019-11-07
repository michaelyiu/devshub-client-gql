import React, { useContext } from 'react';
import { useForm } from '../../hooks';
import { Redirect } from 'react-router';
import Spinner from '../common/Spinner';

import { Link, useParams } from 'react-router-dom';
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

import { EDIT_EDUCATION } from "../gql/Mutations";
import { useMutation } from '@apollo/react-hooks';

import { EducationContext } from '../../contexts/EducationContext';

// import { addEducation } from '../../actions/profileActions';
const moment = require('moment');

const AddEducation = () => {
	const { findEduById, findEduAndUpdate } = useContext(EducationContext);
	const { edu_id } = useParams();
	const eduToEdit = findEduById(edu_id);

	const { values, handleChange, handleSubmit } = useForm(() => {
		findEduAndUpdate(edu_id, values)
		editEducation();
	}, {
		id: eduToEdit.id,
		school: eduToEdit.school ? eduToEdit.school : '',
		degree: eduToEdit.degree ? eduToEdit.degree : '',
		fieldOfStudy: eduToEdit.fieldOfStudy ? eduToEdit.fieldOfStudy : '',
		from: eduToEdit.from ? moment.unix((eduToEdit.from / 1000)).format('YYYY-MM-DD') : '',
		to: eduToEdit.to ? moment.unix(eduToEdit.to / 1000).format('YYYY-MM-DD') : '',
		current: eduToEdit.current ? eduToEdit.current : false,
		description: eduToEdit.description ? eduToEdit.description : '',
		// errors: {},
		// disabled: false
	})


	const [editEducation, { loading, data, error }] = useMutation(
		EDIT_EDUCATION,
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
		// values.id = data.editEducation.id
		return <Redirect to='/dashboard' />

	}
	// onCheck = (e) => {
	// 	this.setState({
	// 		disabled: !this.state.disabled,
	// 		current: !this.state.current
	// 	})
	// }
	return (
		<div className="add-education">
			<div className="container">
				<div className="row">
					<div className="col-md-8 m-auto">
						<Link to="/dashboard" className="btn btn-light">
							Go Back
						</Link>
						<h1 className="display-4 text-center">Edit Education</h1>
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
							{/* <div className="form-check mb-4">
								<input
									type="checkbox"
									className="form-check-input"
									name="current"
									value={values.current}
									checked={values.current}
									onChange={handleCheck}
									id="current"
								/>
								<label htmlFor="current" className="form-check-label">
									Current Job
                  </label>
							</div> */}
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
						{/* supress warning for non usage for now */}
						{error && <p data-testid="login-error">{error.message}</p>}
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddEducation;
