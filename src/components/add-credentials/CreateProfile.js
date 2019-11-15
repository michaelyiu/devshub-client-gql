import React, { useState, useContext } from 'react';
import { useForm } from '../../hooks'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Spinner from '../common/Spinner';

import { UPDATE_PROFILE } from "../gql/Mutations";

import TextFieldGroup from './../common/TextFieldGroup';
import TextAreaFieldGroup from './../common/TextAreaFieldGroup';
import InputGroup from './../common/InputGroup';
import SelectListGroup from './../common/SelectListGroup';
import { useMutation } from '@apollo/react-hooks';

import { ProfileContext } from '../../contexts/ProfileContext';


const _ = require('lodash');

const CreateProfile = () => {
	const [displaySocialInputs, setDisplaySocialInputs] = useState(false);
	const { profile, setProfile } = useContext(ProfileContext);

	const { values, handleChange, handleSubmit } = useForm(() => {
		updateProfile();
	}, {
		// displaySocialInputs: false,
		handle: !_.isEmpty(profile.handle) ? profile.handle : '',
		company: !_.isEmpty(profile.company) ? profile.company : '',
		website: !_.isEmpty(profile.website) ? profile.website : '',
		location: !_.isEmpty(profile.location) ? profile.location : '',
		status: !_.isEmpty(profile.status) ? profile.status : '',
		skills: !_.isEmpty(profile.skills) ? profile.skills.join(',') : '',
		githubUsername: !_.isEmpty(profile) ? profile.githubUsername : '',
		bio: !_.isEmpty(profile.bio) ? profile.bio : '',
		twitter: !_.isEmpty(profile.social.twitter) ? profile.social.twitter : '',
		facebook: !_.isEmpty(profile.social.facebook) ? profile.social.facebook : '',
		linkedin: !_.isEmpty(profile.social.linkedin) ? profile.social.linkedin : '',
		youtube: !_.isEmpty(profile.social.youtube) ? profile.social.youtube : '',
		instagram: !_.isEmpty(profile.social.instagram) ? profile.social.instagram : '',
		// errors: {}
	})

	const [updateProfile, { loading, data, error }] = useMutation(
		UPDATE_PROFILE,
		{
			variables: values,
			onCompleted(data) {
				console.log(data)
				if (data && data.updateProfile) {
					setProfile(data.updateProfile);
					setProfile(data.updateSocials);
				}
			}
		}
	)

	let errors;

	if (!loading && error) {
		errors = error.graphQLErrors[0].extensions.exception.errors;
	}

	if (loading) return <Spinner />

	if (data) {
		return <Redirect to='/dashboard' />
	}

	let socialInputs;

	if (displaySocialInputs) {
		socialInputs = (
			<div>
				<InputGroup
					placeholder="Twitter Profile URL"
					name="twitter"
					icon="fab fa-twitter"
					value={values.twitter}
					onChange={handleChange}
					error={errors && errors.twitter ? errors.twitter : null}
				/>
				<InputGroup
					placeholder="Facebook Profile URL"
					name="facebook"
					icon="fab fa-facebook"
					value={values.facebook}
					onChange={handleChange}
					error={errors && errors.facebook ? errors.facebook : null}
				/>
				<InputGroup
					placeholder="LinkedIn Profile URL"
					name="linkedin"
					icon="fab fa-linkedin"
					value={values.linkedin}
					onChange={handleChange}
					error={errors && errors.linkedin ? errors.linkedin : null}
				/>
				<InputGroup
					placeholder="YouTube Channel URL"
					name="youtube"
					icon="fab fa-youtube"
					value={values.youtube}
					onChange={handleChange}
					error={errors && errors.youtube ? errors.youtube : null}
				/>
				<InputGroup
					placeholder="Instagram Page URL"
					name="instagram"
					icon="fab fa-instagram"
					value={values.instagram}
					onChange={handleChange}
					error={errors && errors.instagram ? errors.instagram : null}
				/>
			</div>
		)
	}

	// Select options for status
	const options = [
		{ label: '* Select Professional Status', value: 0, disabled: 'disabled' },
		{ label: 'Developer', value: 'Developer' },
		{ label: 'Information Security Specialist', value: 'Information Security Specialist' },
		{ label: 'Network Administrator', value: 'Network Administrator' },
		{ label: 'Network Engineer', value: 'Network Engineer' },
		{ label: 'Database Administrator', value: 'Database Administrator' },
		{ label: 'Blockchain Developer', value: 'Blockchain Developer' },
		{ label: 'Information Technology Analysts', value: 'Information Technology Analysts' },
		{ label: 'Information Security', value: 'Information Security' },
		{ label: 'Quality Assurance Analyst', value: 'Quality Assurance Analyst' },
		{ label: 'Web Administrator', value: 'Web Administrator' },
		{ label: 'Manager', value: 'Manager' },
		{ label: 'Instructor', value: 'Instructor' },
		{ label: 'Intern', value: 'Intern' },
		{ label: 'Administrative Assistant', value: 'Administrative Assistant' },
		{ label: 'Receptionist', value: 'Receptionist' }
	];


	return (
		<div className="create-profile">
			<div className="container">
				<div className="row">
					<div className="col-md-8 m-auto">
						<Link to="/dashboard" className="btn btn-light">
							Go Back
              </Link>
						<h1 className="display-4 text-center">{!_.isEmpty(profile) ? 'Edit Your Profile' : 'Create Your Profile'}</h1>
						<p className="lead text-center">
							Let's get some information to make your profile stand out!
              </p>
						<small className="d-block pb-3">* = required fields</small>
						<form onSubmit={handleSubmit}>
							<TextFieldGroup
								placeholder="* Profile Handle"
								name="handle"
								value={values.handle}
								onChange={handleChange}
								error={errors && errors.handle ? errors.handle : null}
								info="A unique handle for your profile URL. Your full name, company name, nickname"
							/>
							<SelectListGroup
								placeholder="* Status"
								name="status"
								value={values.status}
								onChange={handleChange}
								error={errors && errors.status ? errors.status : null}
								options={options}
								info="Give us an idea of where you are at in your career"
							/>
							<TextFieldGroup
								placeholder="Company"
								name="company"
								value={values.company}
								onChange={handleChange}
								error={errors && errors.company ? errors.company : null}
								info="Could be your own company or one you work for"
							/>
							<TextFieldGroup
								placeholder="Website"
								name="website"
								value={values.website}
								onChange={handleChange}
								error={errors && errors.website ? errors.website : null}
								info="Could be your own personal website or a company one"
							/>
							<TextFieldGroup
								placeholder="Location"
								name="location"
								value={values.location}
								onChange={handleChange}
								error={errors && errors.location ? errors.location : null}
								info="City or city &amp; province or state suggested (eg. Toronto, ON)"
							/>
							<TextFieldGroup
								placeholder="* Skills"
								name="skills"
								value={values.skills}
								onChange={handleChange}
								error={errors && errors.skills ? errors.skills : null}
								info="Please use comma separated values (eg. HTML,CSS,JavaScript,React,Redux)"
							/>
							<TextFieldGroup
								placeholder="Github Username"
								name="githubUsername"
								value={values.githubUsername}
								onChange={handleChange}
								error={errors && errors.githubUsername ? errors.githubUsername : null}
								info="If you want your latest repos and a Github link, include your username"
							/>
							<TextAreaFieldGroup
								placeholder="Short Bio"
								name="bio"
								value={values.bio}
								onChange={handleChange}
								error={errors && errors.bio ? errors.bio : null}
								info="Tell us a little about yourself"
							/>
							<div className="mp-3">
								<button
									type="button"
									onClick={() =>
										setDisplaySocialInputs(!displaySocialInputs)
									}
									className="btn btn-light">
									Add Social Network Links
                  </button>
								<span className="text-muted">Optional</span>
							</div>
							{socialInputs}
							<input type="submit" value="Submit" className="btn btn-info btn-block mt-4" />
						</form>
						{error && <p data-testid="login-error">{error.message}</p>}
					</div>
				</div>
			</div>
		</div >
	)
}
export default CreateProfile;