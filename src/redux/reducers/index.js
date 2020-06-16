import { combineReducers } from 'redux';
import customerReducer from './customers.reducer';

const rootReducer = combineReducers({
    customers: customerReducer,
    state: () => ({})
});

export default rootReducer;
