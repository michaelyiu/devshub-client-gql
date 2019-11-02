import React, { useState } from "react";

const moment = require('moment');

const Experience = () => {
	return (
		<div>
			<h4 className="mb-4">Experience Credentials</h4>
			<div className="flex-container exp-head-row">
				<div className="exp-column">Company</div>
				<div className="exp-column title">Title</div>
				<div className="exp-column years">Years</div>
				<div className="exp-column"></div>
			</div>
		</div>
	)
};

export default Experience;