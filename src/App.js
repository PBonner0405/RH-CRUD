import React, { useState, Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { customerActions } from './redux/actions'
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

const App = (props) => {

	const initialFormState = { id: null, fname: '', lname: '', birthday: "1999-09-09", phone: "" }

	const [ searchResults, setSearchResults ] = useState([]);
	// Setting state
	const { usersData, editing,
			addUser, deleteUser, updateUser, setEditing
		} = props;

	const [ currentUser, setCurrentUser ] = useState(initialFormState)

	useEffect(() => {
		setSearchResults(usersData);
	},[usersData]);

	// const updateUser = (id, updatedUser) => {

	// 	setUsers(usersData.map(user => (user.id === id ? updatedUser : user)))
	// }

	const editRow = user => {
		setCurrentUser({ id: user.id, fname: user.fname, lname: user.lname, birthday: user.birthday, phone: user.phone })
		setEditing(true);
	}

	const onSearch = value => {
		const res = usersData.filter((user) => {
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

App.defaultProps = {
	usersData: [],
	editing: false
}

App.propTypes = {
	usersData: PropTypes.array,
	editing: PropTypes.bool
}

function mapStateToProps(state, props) {
    return {
		usersData: state.customers.usersData,
		editing: state.customers.editing
    };
}

const actionCreators = {
    addUser: customerActions.addUser,
    deleteUser: customerActions.deleteUser,
    updateUser: customerActions.updateUser,
	setEditing: customerActions.setEditing
}

export default connect(mapStateToProps, actionCreators)(App)
