import React from 'react';
const _ = require('lodash');

const ProfileAbout = (props) => {
	const { profile } = props;
	// Get first name
	let firstName;
	let skills;
	if (profile) {
		firstName = profile.user.name.trim().split(' ')[0];

		// 	// Skill list
		skills = profile.skills.map((skill, index) => (
			<div key={index} className="p-3">
				<i className="fa fa-check"></i>{skill}
			</div>
		));
	}




	return (
		<div className="row">
			<div className="col-md-12">
				<div className="card card-body bg-light mb-3">
					<h3 className="text-center text-info">{firstName}'s Bio</h3>
					<p className="lead">{_.isEmpty(profile ? profile.bio : null) ? <span>{firstName} does not have a bio yet</span> : (<span>{profile.bio}</span>)}
					</p>
					<hr />
					<h3 className="text-center text-info">Skill Set</h3>
					<div className="row">
						<div className="d-flex flex-wrap justify-content-center align-items-center">
							{skills}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileAbout;