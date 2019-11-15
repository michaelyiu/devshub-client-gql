import React from 'react'
import ProfileItem from './ProfileItem';

import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_PROFILES } from "../../gql/Queries/profile";

import Spinner from './../common/Spinner';

const Profiles = () => {

	const {
		data, loading
	} = useQuery(GET_ALL_PROFILES)

	let profileItems;


	if (loading) {
		profileItems = <Spinner />
	} else {
		if (data && data.profiles && data.profiles.length > 0) {
			profileItems = data.profiles.map((profile, index) => (
				// <ProfileItem key={profile.id} profile={profile} />
				<ProfileItem key={index} profile={profile} />
			))
		} else {
			profileItems = <h4>No profiles found....</h4>
		}
	}

	return (
		<div className="profiles">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h1 className="display-4 text-center">Developer Profiles</h1>
						<p className="lead text-center">
							Browse and connect with developers
						</p>
						{profileItems}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profiles;