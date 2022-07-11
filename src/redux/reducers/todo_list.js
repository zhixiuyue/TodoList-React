import { ADD_ITEM, DETE_ITEM, MODIFY_ITEM, MODIFYSTATE, DELETDONE_ITEM } from '../constant'

const initState = []
export default function todo_listReducer(preState = initState, action) {
    const { type, value } = action
    switch (type) {
        case ADD_ITEM:
            return [value, ...preState]
        case DETE_ITEM:
            return preState.filter((todoObj) => {
                return todoObj.id !== value
            })
        case MODIFY_ITEM:
            return preState.map((todoObj) => {
                if (todoObj.id === value.id) {
                    todoObj.isdone = value.val;
                    // return { ...todoObj, isdone: value.val }
                }
                return todoObj
            })
        case MODIFYSTATE:
            return preState.map((todoObj) => {
                return { ...todoObj, isdone: value }
            })
        case DELETDONE_ITEM:
            return preState.filter((todoObj) => {
                return todoObj.isdone === false
            })
        default:
            return preState
    }
}