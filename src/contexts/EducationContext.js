import React, { createContext, useState, useEffect } from 'react'

export const EducationContext = createContext();

const EducationContextProvider = (props) => {
	const [education, setEducation] = useState(() => {
		const localData = localStorage.getItem('education');
		return localData ? JSON.parse(localData) : [];
	})

	const addEducation = (edu) => {
		setEducation([...education, edu])
	}

	const findEduAndUpdate = (edu_id, newEdu) => {
		const currentEduIndex = education.indexOf(findEduById(edu_id));
		education[currentEduIndex] = newEdu;
	}

	const findEduById = (edu_id) => {
		return education.find(({ id }) => id === edu_id);
	}

	const deleteEducation = (edu_id) => {
		setEducation(education.filter(edu => edu.id !== edu_id))
	}

	const clearEducation = () => {
		setEducation([]);
	}

	useEffect(() => {
		localStorage.setItem('education', JSON.stringify(education))
	}, [education])

	return (
		<EducationContext.Provider value={{ education, setEducation, addEducation, findEduById, findEduAndUpdate, deleteEducation, clearEducation }}>
			{props.children}
		</EducationContext.Provider>
	)
}

export default EducationContextProvider
