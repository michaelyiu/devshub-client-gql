import React, { createContext, useState, useEffect } from 'react'

export const ProfileContext = createContext();

const ProfileContextProvider = (props) => {
	const [experience, setExperience] = useState({})
	const [education, setEducation] = useState({})

	return (
		<ProfileContext.Provider value={{ experience, education, setExperience, setEducation }}>
			{props.children}
		</ProfileContext.Provider>
	)
}

export default ProfileContextProvider
