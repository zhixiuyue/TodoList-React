import { combineReducers } from 'redux'
import todo_listReducer from './todo_list'

const allReducer = combineReducers({
    todo_list: todo_listReducer
})

export default allReducer