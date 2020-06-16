import Strings from '../../constants/strings';

function addUser(user: any) {

    function request(_user: any) { return { type: Strings.ADD_REQUEST, _user }; }
    function success(_user: any) { return { type: Strings.ADD_SUCCESS, _user }; }

    return (dispatch: any) => {
        dispatch(request(user));
        dispatch(success(user));
    };
}

function deleteUser(id: any) {

    function request(_id: any) { return { type: Strings.DELETE_REQUEST, _id }; }
    function success(_id: any) { return { type: Strings.DELETE_SUCCESS, _id }; }

    return (dispatch: any) => {
        dispatch(request(id));
        dispatch(success(id));
    };
}

function updateUser(id: any, updatedUser: any) {

    function request(_id: any, _updatedUser: any) { return { type: Strings.UPDATE_REQUEST, _id, _updatedUser }; }
    function success(_id: any, _updatedUser: any) { return { type: Strings.UPDATE_SUCCESS, _id, _updatedUser }; }

    return (dispatch: any) => {
        dispatch(request(id, updatedUser));
        dispatch(success(id, updatedUser));
    };
}

function editUser(user: any) {

    function success(_user: any) { return { type: Strings.EDIT_SUCCESS, _user }; }

    return (dispatch: any) => {
        dispatch(success(user));
    };
}

function setEditing(flag: boolean) {
    function request(_flag: boolean) { return { type: Strings.EDIT_REQUEST, _flag }; }

    return (dispatch: any) => {
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