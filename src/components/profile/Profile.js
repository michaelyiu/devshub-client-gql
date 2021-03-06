import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import { GET_PROFILE_BY_HANDLE } from "../../gql/Queries/profile"; //getuser by handle

import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileCreds from './ProfileCreds';
import ProfileGithub from './ProfileGithub';
import Spinner from './../common/Spinner';

const Profile = () => {
	const { handle } = useParams();
	const history = useHistory();

	const { data, loading, error } = useQuery(GET_PROFILE_BY_HANDLE, {
		variables: { handle }
	})

	let profile;

	if (!loading && data)
		profile = data.profileByHandle;

	if (error)
		history.push('/not-found');

	let profileContent;

	if (profile === null || profile === {}) {
		profileContent = <Spinner />;
	}
	else {
		profileContent = (
			<div>
				<div className="row">
					<div className="col-md-6">
						<Link to="/profiles" className="btn btn-light mb-3 float-left">
							Back To Profiles
						</Link>
					</div>
					<div className="col-md-6">
					</div>
				</div>
				<ProfileHeader profile={profile} />
				<ProfileAbout profile={profile} />
				{
					profile ?
						(
							<div>
								<ProfileCreds education={profile.education} experience={profile.experience} />
								<ProfileGithub username={profile.githubUsername} />
							</div>
						) : null
				}
			</div>
		);
	}

	return (
		<div className="profile">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						{profileContent}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile;