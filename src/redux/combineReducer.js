import { combineReducers } from 'redux'
import data from './AuthReducer';
import addingData from './CommentReducer';


const combineReducer = combineReducers({
    login: data,
    allData: addingData,
})
export default combineReducer
