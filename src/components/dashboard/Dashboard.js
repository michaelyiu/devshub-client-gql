import React, { useState } from "react";

import { CURRENT_USER_QUERY } from "../gql/Queries";

import { useQuery } from '@apollo/react-hooks';

const Dashboard = () => {
	//grab user info from apollo cache. or query for it. currentUser data should probably be completely cached
	const [user, setUser] = useState({name: "", email:""})
	const [education, setEducation] = useState();
	const [experience, setExperience] = useState();
	let dashboardContent;
	// If loading, load spinner, otherwise load actual content
	/*
		if(profile === null || loading) {
			dashboardContent = <Spinner />
		}
	*/

	const { loading, error, data } = useQuery(CURRENT_USER_QUERY, {
		variables: { email: 'onew1ng3d@hotmail.com'}
	});
	console.log(data);
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
