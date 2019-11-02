import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
	const [isAuthenticated, setAuth] = useState(false);
	const [currentUser, setCurrentUser] = useState({})
	const toggleAuth = () => {
		setAuth(!isAuthenticated)
	}
	const addCurrentUser = (user) => {
		setCurrentUser(user);
	}
	return (
		<AuthContext.Provider value={{ isAuthenticated, toggleAuth, currentUser, addCurrentUser }}>
			{props.children}
		</AuthContext.Provider>
	)

}

export default AuthContextProvider;
