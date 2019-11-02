import React, { useState } from "react";

const moment = require('moment');

const Education = () => {
	return (
		<div>
			<h4 className="mb-4">Education Credentials</h4>
			<div className="flex-container edu-head-row">
				<div className="edu-column">Company</div>
				<div className="edu-column title">Title</div>
				<div className="edu-column years">Years</div>
				<div className="edu-column"></div>
			</div>
		</div>
	)
};

export default Education;