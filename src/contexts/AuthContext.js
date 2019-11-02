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
	const clearCurrentUser = () => {
		setCurrentUser({})
	}
	return (
		<AuthContext.Provider value={{ isAuthenticated, toggleAuth, currentUser, addCurrentUser, clearCurrentUser }}>
			{props.children}
		</AuthContext.Provider>
	)

}

export default AuthContextProvider;
