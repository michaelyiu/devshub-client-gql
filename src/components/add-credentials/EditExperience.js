import React, { useContext } from 'react';
import { useForm } from '../../hooks';
import { Redirect } from 'react-router';
import Spinner from '../common/Spinner';

import { Link, useParams } from 'react-router-dom';
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

import { EDIT_EXPERIENCE } from "../gql/Mutations";
import { useMutation } from '@apollo/react-hooks';

import { ProfileContext } from '../../contexts/ProfileContext';

// import { addExperience } from '../../actions/profileActions';
const moment = require('moment');

const AddExperience = () => {
	const { experience, addExperience, findExpById, findAndUpdate } = useContext(ProfileContext);
	const { exp_id } = useParams();
	const expToEdit = findExpById(exp_id);

	const { values, handleChange, handleSubmit } = useForm(() => {
		findAndUpdate(exp_id, values)
		editExperience();
	}, {
		id: expToEdit.id,
		company: expToEdit.company ? expToEdit.company : '',
		title: expToEdit.title ? expToEdit.title : '',
		location: expToEdit.location ? expToEdit.location : '',
		from: expToEdit.from ? moment.unix((expToEdit.from / 1000)).format('YYYY-MM-DD') : '',
		to: expToEdit.to ? moment.unix(expToEdit.to / 1000).format('YYYY-MM-DD') : '',
		current: expToEdit.current ? expToEdit.current : false,
		description: expToEdit.description ? expToEdit.description : '',
		// errors: {},
		// disabled: false
	})


	//1. getExperience from state using ID
	//this.props.getExperience(this.props.match.params.exp_id);

	//set all the stuff into values

	const [editExperience, { loading, data, error }] = useMutation(
		EDIT_EXPERIENCE,
		{
			variables: values
		}
	)

	if (loading) return <Spinner />
	if (data) {
		// values.id = data.editExperience.id
		return <Redirect to='/dashboard' />

	}
	// onCheck = (e) => {
	// 	this.setState({
	// 		disabled: !this.state.disabled,
	// 		current: !this.state.current
	// 	})
	// }
	return (
		<div className="add-experience">
			<div className="container">
				<div className="row">
					<div className="col-md-8 m-auto">
						<Link to="/dashboard" className="btn btn-light">
							Go Back
						</Link>
						<h1 className="display-4 text-center">Edit Experience</h1>
						<small className="d-block pb3">* = required fields</small>
						<form onSubmit={handleSubmit}>
							<TextFieldGroup
								placeholder="* Company"
								name="company"
								value={values.company}
								onChange={handleChange}
							// error={errors.company}
							/>
							<TextFieldGroup
								placeholder="* Job Title"
								name="title"
								value={values.title}
								onChange={handleChange}
							// error={errors.title}
							/>
							<TextFieldGroup
								placeholder="Location"
								name="location"
								value={values.location}
								onChange={handleChange}
							// error={errors.location}
							/>
							<h6>From Date</h6>
							<TextFieldGroup
								name="from"
								type="date"
								value={values.from}
								onChange={handleChange}
							// error={errors.from}
							/>
							<h6>To Date</h6>
							<TextFieldGroup
								name="to"
								type="date"
								value={values.to}
								onChange={handleChange}
								// error={errors.to}
								disabled={values.disabled ? 'disabled' : ''}
							/>
							{/* <div className="form-check mb-4">
								<input
									type="checkbox"
									className="form-check-input"
									name="current"
									value={values.current}
									checked={values.current}
									onChange={this.onCheck}
									id="current"
								/>
								<label htmlFor="current" className="form-check-label">
									Current Job
                  </label>
							</div> */}
							<TextAreaFieldGroup
								placeholder="Job Description"
								name="description"
								value={values.description}
								onChange={handleChange}
								// error={errors.description}
								info="Tell us about the position"
							/>
							<input type="submit" value="Submit" className="btn btn-info btn-block mt-4" />
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddExperience;
