import React, { createContext, useState, useEffect } from 'react'

export const ProfileContext = createContext();

const ProfileContextProvider = (props) => {
	const [profile, setProfile] = useState(() => {
		const localData = localStorage.getItem('profile');
		return localData ? JSON.parse(localData) : [];
	})

	// const [experience, setExperience] = useState(() => {
	// 	const localData = localStorage.getItem('experience');
	// 	return localData ? JSON.parse(localData) : [];
	// })


	// const addExperience = (exp) => {
	// 	setExperience([...experience, exp])
	// }

	// const findExpById = (exp_id) => {
	// 	return experience.find(({ id }) => id === exp_id);
	// }

	// const findExpAndUpdate = (exp_id, newExp) => {
	// 	const currentExpIndex = experience.indexOf(findExpById(exp_id));
	// 	experience[currentExpIndex] = newExp;
	// }




	// const findEduById = (edu_id) => {
	// 	return education.find(({ id }) => id === edu_id);
	// }



	// const deleteExperience = (exp_id) => {
	// 	console.log(experience);
	// 	setExperience(experience.filter(exp => exp.id !== exp_id))
	// }



	// const clearProfile = () => {
	// 	setExperience([]);
	// 	setEducation([]);
	// }


	return (
		<ProfileContext.Provider value={{ /*clearProfile*/ }}>
			{props.children}
		</ProfileContext.Provider>
	)
}

export default ProfileContextProvider
