import React, { useEffect, useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import { ProfileContext } from '../../contexts/ProfileContext';
import { ExperienceContext } from '../../contexts/ExperienceContext';
import { EducationContext } from '../../contexts/EducationContext';
import Spinner from '../common/Spinner';
import jwt_decode from 'jwt-decode';

import { GET_PROFILE, GET_CURRENT_USER } from "../gql/Queries";

import { useQuery } from '@apollo/react-hooks';
import { useHistory, Link } from "react-router-dom";

import Experience from "./Experience";
import Education from "./Education";
import DeleteProfileButton from "./DeleteProfileButton";

import ProfileActions from "./ProfileActions";

const Dashboard = () => {
	const { isAuthenticated, addCurrentUser, currentUser } = useContext(AuthContext);
	const { profile, setProfile } = useContext(ProfileContext);
	const { setExperience } = useContext(ExperienceContext);
	const { setEducation } = useContext(EducationContext);

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
					setProfile(userProfile.profile)
				}
			},
			fetchPolicy: 'network-only'
		}
	);



	useEffect(() => {
		const token = jwt_decode(window.localStorage.getItem('token'));
		window.localStorage.setItem('auth', JSON.stringify(token))
		if (!isAuthenticated) {
			history.push("/login");
		} else {
			//if the user is authenticated

		}
		//empty array may need to be removed
	})
	let dashboardContent;
	if (currentUserLoading || userProfileLoading) return <Spinner />
	else {
		if (profile && Object.keys(profile).length > 0) {
			dashboardContent = (
				<div>
					<p className="lead text-name">Welcome <Link to={`/profile/${profile.handle}`}> {currentUser.name}</Link></p>
					<ProfileActions />
					<Experience />
					<Education />
					<div className="mt-5 mb-5">
						<DeleteProfileButton />
					</div>
				</div>
			)
		} else {
			dashboardContent = (
				<div>
					<div className="lead text-name">Welcome {currentUser.name}</div>
					<Link to="/create-profile" className="btn btn-lg btn-info">
						Create Profile
            </Link>
				</div>
			)
		}

	}

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
