import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
	const [isAuthenticated, setAuth] = useState(() => {
		const localData = localStorage.getItem('isAuthenticated');
		return localData ? JSON.parse(localData) : false;
	});
	const [currentUser, setCurrentUser] = useState(() => {
		const localData = localStorage.getItem('currentUser');
		return localData ? JSON.parse(localData) : {};
	})
	const toggleAuth = () => {
		setAuth(!isAuthenticated)
	}
	const addCurrentUser = (user) => {
		setCurrentUser(user);
	}
	const clearCurrentUser = () => {
		setCurrentUser({})
	}
	useEffect(() => {
		localStorage.setItem('isAuthenticated', isAuthenticated)
	}, [isAuthenticated])
	useEffect(() => {
		localStorage.setItem('currentUser', JSON.stringify(currentUser))
	}, [currentUser])
	return (
		<AuthContext.Provider value={{ isAuthenticated, toggleAuth, currentUser, addCurrentUser, clearCurrentUser }}>
			{props.children}
		</AuthContext.Provider>
	)

}

export default AuthContextProvider;
