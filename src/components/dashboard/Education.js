import React, { useContext } from "react";
import { Link } from 'react-router-dom';

import { useMutation, useLazyQuery } from '@apollo/react-hooks';
import { DELETE_EDUCATION } from "../../gql/Mutations/education";
import { GET_PROFILE } from "../../gql/Queries/profile";

import { EducationContext } from '../../contexts/EducationContext';

import Moment from "react-moment";
const moment = require('moment');

const Education = () => {
	const { education, deleteEducation } = useContext(EducationContext);
	const loggedInEmail = localStorage.getItem("email");

	const [onDeleteHandler, /*{ data, loading, error }*/] = useMutation(
		DELETE_EDUCATION,
		{
			onCompleted(data) {
				if (data && data.deleteEducation) {
					deleteEducation(data.deleteEducation);
					profileQuery();
				}
			}
		}
	)

	const [profileQuery,
		// {
		// 	data: userProfile,
		// 	loading: userProfileLoading,
		// 	error: userProfileError
		// }
	] = useLazyQuery(
		GET_PROFILE,
		{
			variables: {
				email: loggedInEmail
			},
			fetchPolicy: 'network-only',
		}
	);

	const onClickHandler = async (edu_id) => {
		onDeleteHandler({ variables: { id: edu_id } });
	}

	const eduJSX = education.map(edu => (
		<div key={edu.id} className="flex-container edu-row">
			<div className="edu-column">{edu.school}</div>
			<div className="edu-column degree">{edu.degree}</div>
			<div className="edu-column years">
				<Moment format="YYYY/MM/DD">{moment.unix(edu.from / 1000)}</Moment> - {edu.to === null ? ('Now') : <Moment format="YYYY/MM/DD">{moment.unix(edu.to / 1000)}</Moment>}
			</div>
			<div className="edu-column buttonGroup">
				<Link to={`/edit-education/${edu.id}`} className="btn btn-primary btn-custom">Edit</Link>
				<button onClick={async () => onClickHandler(edu.id)} className="btn btn-danger btn-custom">Delete</button>
			</div>
		</div>
	))

	return (
		<div>
			<h4 className="mb-4">Education Credentials</h4>
			<div className="flex-container edu-head-row">
				<div className="edu-column">School</div>
				<div className="edu-column degree">Degree</div>
				<div className="edu-column years">Years</div>
				<div className="edu-column"></div>
			</div>
			{eduJSX}
		</div>
	)
};

export default Education;