import { createStore, applyMiddleware } from 'redux'
// import reducer from './reducers'
import todo_list from './reducers/todo_list'
import thunk from 'redux-thunk'

export default createStore(todo_list, applyMiddleware(thunk))