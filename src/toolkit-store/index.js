import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from './features/todo_list/todoListSlice';

export const store = configureStore({
    reducer: {
        todoList: todoListReducer,
    },
});