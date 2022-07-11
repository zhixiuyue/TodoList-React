import { createSlice } from '@reduxjs/toolkit';

// reducer
const todoListSlice = createSlice({
    name: 'todoList',
    initialState: [],
    reducers: {
        add_item: (state, action) => {
            state.push(action.payload);
        },
        delete_item: (state, action) => {
            return state.filter((todoObj) => todoObj.id !== action.payload.id);
        },
        modify_item: (state, action) => {
            return state.map((todoObj) => {
                if (todoObj.id === action.payload.id) {
                    return { ...todoObj, isdone: action.payload.isdone };
                }
                return todoObj;
            });
        },
        modify_state: (state, action) => {
            return state.map((todoObj) => {
                return { ...todoObj, isdone: action.payload.isdone };
            });
        },
        deletedone_item: (state, action) => {
            return state.filter((todoObj) => {
                return todoObj.isdone === false;
            });
        }
    }
})

const { actions, reducer } = todoListSlice;
export const { add_item, delete_item, modify_item, modify_state, deletedone_item } = actions;
export default reducer;

// export const asyncIncrement = (payload) => (dispatch) => {
//     setTimeout(() => {
//         dispatch(increment(payload));
//     }, 2000);
// };