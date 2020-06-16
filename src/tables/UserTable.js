import React from 'react'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>First name</th>
        <th>Last name</th>
        <th>Birthday</th>
        <th>Phone</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>{user.birthday}</td>
            <td>{user.phone}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
