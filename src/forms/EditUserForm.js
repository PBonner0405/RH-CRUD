import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  console.log(props.currentUser);

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input type="text" name="fname" value={user.fname} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="lname" value={user.lname} onChange={handleInputChange} />
			<label>Date of Birth</label>
			<input type="date" name="birthday" value={user.birthday} onChange={handleInputChange} />
			<label>Phone Number</label>
			<input type="text" name="phone" value={user.phone} onChange={handleInputChange} />
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm
