import React, { useContext } from "react";
import { ProfileContext } from '../../contexts/ProfileContext';

import { Link } from 'react-router-dom';
import Moment from "react-moment";
const moment = require('moment');

const Experience = () => {
	const { experience } = useContext(ProfileContext);

	const expJSX = experience.map(exp => (
		<div key={exp.id} className="flex-container exp-row">
			<div className="exp-column">{exp.company}</div>
			<div className="exp-column title">{exp.title}</div>
			<div className="exp-column years">
				<Moment format="YYYY/MM/DD">{moment.unix(exp.from / 1000)}</Moment> - {exp.to === null ? ('Now') : <Moment format="YYYY/MM/DD">{moment.unix(exp.to / 1000)}</Moment>}
			</div>
			<div className="exp-column buttonGroup">
				<Link to={`/edit-experience/${exp.id}`} className="btn btn-primary btn-custom">Edit</Link>
				{/* <button onClick={() => this.onDeleteClick(exp._id)} className="btn btn-danger btn-custom">Delete</button> */}
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