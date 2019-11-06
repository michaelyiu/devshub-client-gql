import React, { useEffect, useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import { ProfileContext } from '../../contexts/ProfileContext';
import Spinner from '../common/Spinner';

import { GET_PROFILE, GET_CURRENT_USER } from "../gql/Queries";

import { useQuery } from '@apollo/react-hooks';
import { useHistory } from "react-router-dom";

import Experience from "./Experience";
import Education from "./Education";
import ProfileActions from "./ProfileActions";

const Dashboard = () => {
	const { isAuthenticated, addCurrentUser, currentUser } = useContext(AuthContext);
	const { setExperience, setEducation } = useContext(ProfileContext);

	let history = useHistory();

	const loggedInEmail = localStorage.getItem("email");

	// If loading, load spinner, otherwise load actual content
	/*
		if(profile === null || loading) {
			dashboardContent = <Spinner />
		}
	*/
	const {
		data: currentUserData,
		loading: currentUserLoading,
		error: currentUserError
	} = useQuery(
		GET_CURRENT_USER,
		{
			variables: {
				email: loggedInEmail
			}
		}
	);

	if (currentUserData && currentUserData.user)
		addCurrentUser(currentUserData.user)

	const {
		data: userProfile,
		loading: userProfileLoading,
		error: userProfileError
	} = useQuery(
		GET_PROFILE,
		{
			variables: {
				email: loggedInEmail
			},
			onCompleted() {
				if (userProfile && userProfile.profile) {
					setExperience(userProfile.profile.experience)
					setEducation(userProfile.profile.education)
				}
			},
			fetchPolicy: 'network-only'
		}
	);

	// if (userProfile && userProfile.profile) {
	// 	setEducation(userProfile.profile.education)
	// 	setExperience(userProfile.profile.experience)
	// }

	useEffect(() => {
		if (!isAuthenticated) {
			history.push("/login");
		} else {
			//if the user is authenticated

		}
	})

	if (currentUserLoading || userProfileLoading) return <Spinner />

	let dashboardContent = (
		<div>
			<ProfileActions />
			<p className="lead text-name">Welcome {currentUser.name}</p>
			<Experience />
			<Education />
			{/* <Experience experience={profile.experience} />
			<Education education={profile.education} />
			<div className="mt-5 mb-5">
				<button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">Delete My Account</button>
			</div> */}
		</div>
	)

	return (
		<div className="dashboard">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<h1 className="display-4">Dashboard</h1>
						{dashboardContent}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard;
