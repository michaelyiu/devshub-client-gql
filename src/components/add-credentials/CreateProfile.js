import React, { useContext } from 'react';
import { useForm } from '../../hooks'

import { Link } from 'react-router-dom';
import TextFieldGroup from './../common/TextFieldGroup';
import TextAreaFieldGroup from './../common/TextAreaFieldGroup';
import InputGroup from './../common/InputGroup';
import SelectListGroup from './../common/SelectListGroup';

const CreateProfile = () => {
	const { values, handleChange, handleSubmit } = useForm(() => {
	}, {
		displaySocialInputs: false,
		handle: '',
		company: '',
		website: '',
		location: '',
		status: '',
		skills: '',
		githubUsername: '',
		bio: '',
		twitter: '',
		facebook: '',
		linkedin: '',
		youtube: '',
		instagram: '',
		errors: {}
	})

	// componentWillReceiveProps(nextProps) {
	// 	if (nextProps.errors) {
	// 		this.setState({ errors: nextProps.errors })
	// 	}

	// }

	// onSubmit = (e) => {
	// 	e.preventDefault();

	// 	const profileData = {
	// 		handle: values.handle,
	// 		company: values.company,
	// 		website: values.website,
	// 		location: values.location,
	// 		status: values.status,
	// 		skills: values.skills,
	// 		githubUsername: values.githubUsername,
	// 		bio: values.bio,
	// 		twitter: values.twitter,
	// 		facebook: values.facebook,
	// 		linkedin: values.linkedin,
	// 		youtube: values.youtube,
	// 		instagram: values.instagram
	// 	}
	// 	this.props.createProfile(profileData, this.props.history);
	// }

	// onChange = (e) => {
	// 	this.setState({ [e.target.name]: e.target.value })
	// }

	// const { errors, displaySocialInputs } = this.state;

	let socialInputs;

	if (values.displaySocialInputs) {
		socialInputs = (
			<div>
				<InputGroup
					placeholder="Twitter Profile URL"
					name="twitter"
					icon="fab fa-twitter"
					value={values.twitter}
					onChange={this.onChange}
				// error={errors.twitter}
				/>
				<InputGroup
					placeholder="Facebook Profile URL"
					name="facebook"
					icon="fab fa-facebook"
					value={values.facebook}
					onChange={this.onChange}
				// error={errors.facebook}
				/>
				<InputGroup
					placeholder="LinkedIn Profile URL"
					name="linkedin"
					icon="fab fa-linkedin"
					value={values.linkedin}
					onChange={this.onChange}
				// error={errors.linkedin}
				/>
				<InputGroup
					placeholder="YouTube Channel URL"
					name="youtube"
					icon="fab fa-youtube"
					value={values.youtube}
					onChange={this.onChange}
				// error={errors.youtube}
				/>
				<InputGroup
					placeholder="Instagram Page URL"
					name="instagram"
					icon="fab fa-instagram"
					value={values.instagram}
					onChange={this.onChange}
				// error={errors.instagram}
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
						<h1 className="display-4 text-center">Create Your Profile</h1>
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
								// error={errors.handle}
								info="A unique handle for your profile URL. Your full name, company name, nickname"
							/>
							<SelectListGroup
								placeholder="* Status"
								name="status"
								value={values.status}
								onChange={handleChange}
								// error={errors.status}
								options={options}
								info="Give us an idea of where you are at in your career"
							/>
							<TextFieldGroup
								placeholder="Company"
								name="company"
								value={values.company}
								onChange={handleChange}
								// error={errors.company}
								info="Could be your own company or one you work for"
							/>
							<TextFieldGroup
								placeholder="Website"
								name="website"
								value={values.website}
								onChange={handleChange}
								// error={errors.website}
								info="Could be your own personal website or a company one"
							/>
							<TextFieldGroup
								placeholder="Location"
								name="location"
								value={values.location}
								onChange={handleChange}
								// error={errors.location}
								info="City or city & province or state suggested (eg. Toronto, ON)"
							/>
							<TextFieldGroup
								placeholder="* Skills"
								name="skills"
								value={values.skills}
								onChange={handleChange}
								// error={errors.skills}
								info="Please use comma separated values (eg. HTML,CSS,JavaScript,React,Redux)"
							/>
							<TextFieldGroup
								placeholder="Github Username"
								name="githubUsername"
								value={values.githubUsername}
								onChange={handleChange}
								// error={errors.githubUsername}
								info="If you want your latest repos and a Github link, include your username"
							/>
							<TextAreaFieldGroup
								placeholder="Short Bio"
								name="bio"
								value={values.bio}
								onChange={handleChange}
								// error={errors.bio}
								info="Tell us a little about yourself"
							/>
							<div className="mp-3">
								<button
									type="button"
									onClick={() => {
										console.log("Hello!")
										// this.setState(prevState => ({
										// 	displaySocialInputs: !prevState.displaySocialInputs
										// }));
									}}
									className="btn btn-light">
									Add Social Network Links
                  </button>
								<span className="text-muted">Optional</span>
							</div>
							{socialInputs}
							<input type="submit" value="Submit" className="btn btn-info btn-block mt-4" />
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
export default CreateProfile;