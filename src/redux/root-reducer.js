import {} from 'redux';
import usersReducers from './reducer';
import {combineReducers} from'redux'

const rootReducer = combineReducers({
    data:usersReducers
})

export default rootReducer;
