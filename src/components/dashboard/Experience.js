import React, { useContext } from "react";
import { ExperienceContext } from '../../contexts/ExperienceContext';

import { Link } from 'react-router-dom';

import { DELETE_EXPERIENCE } from "../gql/Mutations";
import { GET_PROFILE } from "../gql/Queries";

import { useMutation, useLazyQuery } from '@apollo/react-hooks';

import Moment from "react-moment";
const moment = require('moment');

const Experience = () => {
	const { experience, deleteExperience } = useContext(ExperienceContext);
	const loggedInEmail = localStorage.getItem("email");

	const [onDeleteHandler,/* { data, loading, error }*/] = useMutation(
		DELETE_EXPERIENCE,
		{
			onCompleted(data) {
				if (data && data.deleteExperience) {
					deleteExperience(data.deleteExperience);
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

	const onClickHandler = async (exp_id) => {
		onDeleteHandler({ variables: { id: exp_id } });
	}

	const expJSX = experience.map(exp => (
		<div key={exp.id} className="flex-container exp-row">
			<div className="exp-column">{exp.company}</div>
			<div className="exp-column title">{exp.title}</div>
			<div className="exp-column years">
				<Moment format="YYYY/MM/DD">{moment.unix(exp.from / 1000)}</Moment> - {exp.to === null ? ('Now') : <Moment format="YYYY/MM/DD">{moment.unix(exp.to / 1000)}</Moment>}
			</div>
			<div className="exp-column buttonGroup">
				<Link to={`/edit-experience/${exp.id}`} className="btn btn-primary btn-custom">Edit</Link>
				<button onClick={async () => onClickHandler(exp.id)} className="btn btn-danger btn-custom">Delete</button>
			</div>
		</div>
	))

	return (
		<div>
			<h4 className="mb-4">Experience Credentials</h4>
			<div className="flex-container exp-head-row">
				<div className="exp-column">Company</div>
				<div className="exp-column title">Title</div>
				<div className="exp-column years">Years</div>
				<div className="exp-column"></div>
			</div>
			{expJSX}
		</div>
	)
};

export default Experience;