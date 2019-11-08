import { useState } from 'react'

const useForm = (callback, data) => {
	const [values, setValues] = useState(data)

	const handleChange = (event) => {
		event.persist()
		//handle unique case of checkbox manually
		setValues(values => ({
			...values,
			[event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
		}))
	}

	const handleSubmit = (event, onSubmit) => {
		event.preventDefault()
		callback(values)
	}

	// const onCheck = (event) => {
	// 	console.log(values)
	// 	console.log(event.target);
	// 	setValues(values => ({
	// 		...values,
	// 		[event.target.name]: event.target.value
	// 	}))
	// }

	return {
		handleChange,
		handleSubmit,
		values
	}
}

export { useForm }