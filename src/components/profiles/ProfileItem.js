import React from 'react'

const _ = require('lodash');

const ProfileItem = (props) => {
	const { profile } = props;



	return (
		<div className="card card-body bg-light mb-3">
			<div className="row">
				<div className="col-2">
					<img src={profile.user.avatar} alt="" className="rounded-circle" />
				</div>
				<div className="col-lg-6 col-md-4 col-8">
					<h3>{profile.user.name}</h3>
					<h6>{profile.handle}</h6>

					<p>
						{profile.status} {_.isEmpty(profile.company) ? null : (<span> at {profile.company}</span>)}
					</p>
					<p>
						{_.isEmpty(profile.location) ? null : (<span>{profile.location}</span>)}
					</p>
					{/* <Link to={`/user/${user.handle}`} className="btn btn-info">
						View Profile
            </Link> */}
				</div>
				<div className="col-md-4 d-none d-md-block">
					<h4>Skill Set</h4>
					<ul className="list-group">
						{profile && profile.skills ? profile.skills.slice(0, 4).map((skill, index) => (
							<li key={index} className="list-group-item">
								<i className="fa fa-check pr-1" />
								{skill}
							</li>
						)) : null}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ProfileItem;