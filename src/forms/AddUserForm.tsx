import React, { useState } from 'react'

const AddUserForm = (props: any) => {
	const initialFormState = { id: null, fname: '', lname: '', birthday: "1999-09-09", phone: "" }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = (event: any) => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.fname || !user.lname || !user.birthday || !user.phone) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>First Name</label>
			<input type="text" name="fname" value={user.fname} onChange={handleInputChange} />
			<label>Last Name</label>
			<input type="text" name="lname" value={user.lname} onChange={handleInputChange} />
			<label>Date of Birth</label>
			<input type="date" name="birthday" value={user.birthday} onChange={handleInputChange} />
			<label>Phone Number</label>
			<input type="text" name="phone" value={user.phone} onChange={handleInputChange} />
			<button>Add new customer</button>
		</form>
	)
}

export default AddUserForm
