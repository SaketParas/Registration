import { combineReducers } from 'redux'
import data from './AuthReducer';
import stored_data from './CommentReducer';


const combineReducer = combineReducers({
    login: data,
    post:stored_data,
})
export default combineReducer
