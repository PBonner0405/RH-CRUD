import Strings from '../../constants/strings';

function addUser(user) {

    function request(_user) { return { type: Strings.ADD_REQUEST, _user }; }
    function success(_user) { return { type: Strings.ADD_SUCCESS, _user }; }

    return dispatch => {
        dispatch(request(user));
        dispatch(success(user));
    };
}

function deleteUser(id) {

    function request(_id) { return { type: Strings.DELETE_REQUEST, _id }; }
    function success(_id) { return { type: Strings.DELETE_SUCCESS, _id }; }

    return dispatch => {
        dispatch(request(id));
        dispatch(success(id));
    };
}

function updateUser(id, updatedUser) {

    function request(_id, _updatedUser) { return { type: Strings.UPDATE_REQUEST, _id, _updatedUser }; }
    function success(_id, _updatedUser) { return { type: Strings.UPDATE_SUCCESS, _id, _updatedUser }; }

    return dispatch => {
        dispatch(request(id, updatedUser));
        dispatch(success(id, updatedUser));
    };
}

function editUser(user) {

    function success(_user) { return { type: Strings.EDIT_SUCCESS, _user }; }

    return dispatch => {
        dispatch(success(user));
    };
}

function setEditing(flag) {
    function request(_flag) { return { type: Strings.EDIT_REQUEST, _flag }; }

    return dispatch => {
        dispatch(request(flag));
    };
}

export const customerActions = { 
    addUser,
    deleteUser,
    updateUser,
    editUser,
    setEditing
}

export default customerActions;