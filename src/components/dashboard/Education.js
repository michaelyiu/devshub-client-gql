import React, { useContext } from "react";
import { ProfileContext } from '../../contexts/ProfileContext';

import Moment from "react-moment";
const moment = require('moment');

const Education = () => {
	const { education } = useContext(ProfileContext);

	const eduJSX = education.map(edu => (
		<div key={edu.id} className="flex-container edu-row">
			<div className="edu-column">{edu.school}</div>
			<div className="edu-column degree">{edu.degree}</div>
			<div className="edu-column years">
				<Moment format="YYYY/MM/DD">{moment.unix(edu.from / 1000)}</Moment> - {edu.to === null ? ('Now') : <Moment format="YYYY/MM/DD">{moment.unix(edu.to / 1000)}</Moment>}
			</div>
			<div className="edu-column buttonGroup">
				{/* <Link to={`/edit-education/${edu._id}`} className="btn btn-primary btn-custom">Edit</Link> */}
				{/* <button onClick={() => this.onDeleteClick(edu._id)} className="btn btn-danger btn-custom">Delete</button> */}
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