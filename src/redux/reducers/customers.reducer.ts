import Strings from '../../constants/strings';

const initialState = { 
                        usersData: [
                            { id: 1, fname: 'Tony', lname: 'Lew', birthday: "1987-8-20", phone: ""  },
                            { id: 2, fname: 'Jeffrey', lname: 'Dion', birthday: "1989-6-20", phone: ""  },
                            { id: 3, fname: 'Jhon', lname: 'Doe', birthday: "1990-7-26", phone: ""  },
                        ],
                        editing: false
                    };

export function customer(state = initialState, action: any) {
    switch (action.type) {
    case Strings.ADD_REQUEST:
        return {
            ...state
        };
    case Strings.ADD_SUCCESS:
        action._user.id = state.usersData.length + 1;
        return {
            usersData: [...state.usersData, action._user],
            editing: false
        };
    case Strings.DELETE_REQUEST:
        return {
            ...state
        };
    case Strings.DELETE_SUCCESS:
        return {
            usersData: state.usersData.filter(user => user.id !== action._id),
            editing: false
        };
    case Strings.UPDATE_REQUEST:
        return {
            ...state
        };
    case Strings.UPDATE_SUCCESS:
        return {
            editing: false,
            usersData: state.usersData.map(user => (user.id !== action._id ? user : action._updatedUser))
        };
    case Strings.EDIT_REQUEST:
        return {
            ...state,
            editing: action._flag
        };
    case Strings.EDIT_SUCCESS:
        return {
            editing: true
        };
    default:
        return state;
    }
}

export default customer;