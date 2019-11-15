import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { useMutation } from '@apollo/react-hooks';
import { DELETE_PROFILE } from "../gql/Mutations";

import { AuthContext } from '../../contexts/AuthContext';
import { ProfileContext } from "../../contexts/ProfileContext";
import { ExperienceContext } from "../../contexts/ExperienceContext";
import { EducationContext } from "../../contexts/EducationContext";

const DeleteProfileButton = () => {
	const { toggleAuth, clearCurrentUser } = useContext(AuthContext);
	const { clearProfile } = useContext(ProfileContext)
	const { clearExperience } = useContext(ExperienceContext)
	const { clearEducation } = useContext(EducationContext)
	let history = useHistory();

	const [deleteProfile] = useMutation(
		DELETE_PROFILE,
	)

	const onDeleteClick = () => {
		if (window.confirm("Are you sure? This can NOT be undone!")) {
			deleteProfile();
			localStorage.clear();
			toggleAuth();
			clearCurrentUser();
			clearProfile();
			clearExperience();
			clearEducation();
			history.push("/login");
		}
	}

	return (
		<button onClick={onDeleteClick} className="btn btn-danger">Delete My Account</button>
	)
}

export default DeleteProfileButton;