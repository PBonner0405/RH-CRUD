import React, { useState, Fragment } from 'react'
import styled from 'styled-components'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'

const Editable = styled.div`
	flex: 1;
	margin: 0 12px;
`;

const TableWrapper = styled.div`
	flex: 2;
	margin: 0 12px;
`;

const App = () => {
	// Data
	const usersData = [
		{ id: 1, fname: 'Tony', lname: 'Lew', birthday: "1999/09/09", phone: ""  },
		{ id: 2, fname: 'Jeffrey', lname: 'Dion', birthday: "1999/09/09", phone: ""  },
		{ id: 3, fname: 'Jhon', lname: 'Doe', birthday: "1999/09/09", phone: ""  },
	]

	const initialFormState = { id: null, fname: '', lname: '', birthday: "1999/09/09", phone: "" }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)
	const [ searchResults, setSearchResults ] = useState(users);

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, fname: user.fname, lname: user.lname, birthday: user.birthday, phone: user.phone })
	}

	const onSearch = value => {
		const res = users.filter((user) => {
			if(user.fname.toUpperCase().includes(value.toUpperCase()) || 
			user.lname.toUpperCase().includes(value.toUpperCase()) || 
			user.birthday.toString().toUpperCase().includes(value.toUpperCase()) || 
			user.phone.toUpperCase().includes(value.toUpperCase())
			)
				return true;
			return false;
		});
		setSearchResults(res);
	}

	return (
		<div className="container">
			<h1>CRUD with React-Hooks</h1>
			<div className="flex-row">
				<Editable>
					{editing ? (
						<Fragment>
							<h2>Edit customer</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add customer</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</Editable>
				<TableWrapper>
					<h2>View customers</h2>
					<label>Input your search content</label>
					<input type="text" onChange={e => {onSearch(e.target.value)}}/>
					<UserTable users={searchResults} editRow={editRow} deleteUser={deleteUser} />
				</TableWrapper>
			</div>
		</div>
	)
}

export default App
