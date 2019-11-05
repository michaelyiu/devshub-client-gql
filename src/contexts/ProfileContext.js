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

	const findExpById = (exp_id) => {
		return experience.find(({ id }) => id === exp_id);
	}

	const findExpAndUpdate = (exp_id, newExp) => {
		const currentExpIndex = experience.indexOf(findExpById(exp_id));
		experience[currentExpIndex] = newExp;
	}


	const addEducation = (edu) => {
		setEducation([...education, edu])
	}

	const findEduById = (edu_id) => {
		return education.find(({ id }) => id === edu_id);
	}

	const findEduAndUpdate = (edu_id, newEdu) => {
		const currentEduIndex = education.indexOf(findEduById(edu_id));
		education[currentEduIndex] = newEdu;
	}

	useEffect(() => {
		localStorage.setItem('experience', JSON.stringify(experience))
	}, [experience])
	useEffect(() => {
		localStorage.setItem('education', JSON.stringify(education))
	}, [education])
	return (
		<ProfileContext.Provider value={{ experience, education, setExperience, setEducation, addExperience, addEducation, findExpById, findEduById, findExpAndUpdate, findEduAndUpdate }}>
			{props.children}
		</ProfileContext.Provider>
	)
}

export default ProfileContextProvider
