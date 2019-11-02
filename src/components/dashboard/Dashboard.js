import React, { useEffect, useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';

import { GET_PROFILE, GET_CURRENT_USER } from "../gql/Queries";

import { useQuery } from '@apollo/react-hooks';
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const { isAuthenticated, addCurrentUser } = useContext(AuthContext);

  let history = useHistory();

	//grab user info from apollo cache. or query for it. currentUser data should probably be completely cached
	// const [user, setUser] = useState({name: "", email:""})
	// const [education, setEducation] = useState();
	// const [experience, setExperience] = useState();
	let dashboardContent;
	// If loading, load spinner, otherwise load actual content
	/*
		if(profile === null || loading) {
			dashboardContent = <Spinner />
		}
	*/
	const { 
		data: currentUser, 
		loading: currentUserLoading, 
		error: currentUserError 
	} = useQuery(
    GET_CURRENT_USER,
    {
      variables: {
        email: "onew1ng3d@hotmail.com"
      }
    }
	);

	if(currentUser && currentUser.user)
		addCurrentUser(currentUser.user)

  const { 
		data: userProfile, 
		loading: userProfileLoading, 
		error: userProfileError 
	} = useQuery(
    GET_PROFILE,
    {
      variables: {
        email: "onew1ng3d@hotmail.com"
      }
    }
  );



useEffect(() => {
	if(!isAuthenticated){
    history.push("/login");
	} else{
		//if the user is authenticated

	}
})

	// const { loading, error, data } = useQuery(CURRENT_USER_QUERY, {
	// 	variables: { email: 'onew1ng3d@hotmail.com'}
	// });
	// console.log(data);
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
