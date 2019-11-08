import React, { createContext, useState, useEffect } from 'react'

export const ProfileContext = createContext();

const ProfileContextProvider = (props) => {
	const [profile, setProfile] = useState(() => {
		const localData = localStorage.getItem('profile');
		return localData ? JSON.parse(localData) : {};
	})

	const clearProfile = () => {
		setProfile({});
	}
	useEffect(() => {
		localStorage.setItem('profile', JSON.stringify(profile))
	}, [profile])

	return (
		<ProfileContext.Provider value={{ profile, setProfile, clearProfile }}>
			{props.children}
		</ProfileContext.Provider>
	)
}

export default ProfileContextProvider
