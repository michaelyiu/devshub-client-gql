import React, { createContext, useState, useEffect } from 'react'

export const ExperienceContext = createContext();

const ExperienceContextProvider = (props) => {
	const [experience, setExperience] = useState(() => {
		const localData = localStorage.getItem('experience');
		return localData ? JSON.parse(localData) : [];
	})

	const addExperience = (exp) => {
		setExperience([...experience, exp])
	}

	const findExpAndUpdate = (exp_id, newExp) => {
		const currentExpIndex = experience.indexOf(findExpById(exp_id));
		experience[currentExpIndex] = newExp;
	}

	const findExpById = (exp_id) => {
		return experience.find(({ id }) => id === exp_id);
	}

	const deleteExperience = (exp_id) => {
		setExperience(experience.filter(exp => exp.id !== exp_id))
	}

	const clearExperience = () => {
		setExperience([]);
	}

	useEffect(() => {
		localStorage.setItem('experience', JSON.stringify(experience))
	}, [experience])

	return (
		<ExperienceContext.Provider value={{ experience, setExperience, addExperience, findExpById, findExpAndUpdate, deleteExperience, clearExperience }}>
			{props.children}
		</ExperienceContext.Provider>
	)
}

export default ExperienceContextProvider
