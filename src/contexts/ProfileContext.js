import React, { createContext, useState, useEffect } from 'react'

export const ProfileContext = createContext();

const ProfileContextProvider = (props) => {
	const [experience, setExperience] = useState(() => {
		const localData = localStorage.getItem('experience');
		return localData ? JSON.parse(localData) : [];
	})
	const [education, setEducation] = useState(() => {
		const localData = localStorage.getItem('education');
		return localData ? JSON.parse(localData) : [];
	})
	const addExperience = (exp) => {
		setExperience([...experience, exp])
	}
	const addEducation = (edu) => {
		setEducation([...education, edu])
	}

	useEffect(() => {
		localStorage.setItem('experience', JSON.stringify(experience))
	}, [experience])
	useEffect(() => {
		localStorage.setItem('education', JSON.stringify(education))
	}, [education])
	return (
		<ProfileContext.Provider value={{ experience, education, addExperience, setExperience, setEducation, addEducation }}>
			{props.children}
		</ProfileContext.Provider>
	)
}

export default ProfileContextProvider
