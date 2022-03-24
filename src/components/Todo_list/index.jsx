import './index.css'
import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Item from '../Item'
import { addAction, modifyAllStateAction, deleteDoneAction } from '../../redux/actions/todo_list'

export default function Todo_list() {

    const dispatch = useDispatch()
    const todoList = useSelector(state => state)
    const [id_num, setId_Num] = useState(1)
    const [type, setType] = useState(0)
    const doneNum = todoList.reduce((pre, current) => {
        return pre + (current.isdone ? 1 : 0)
    }, 0)
    const button_all = useRef(null)

    useEffect(() => {
        button_all.current.focus()
    }, [])

    // 更新所有的任务的状态
    function handleSelectAll(e) {
        const isdone = e.target.checked
        dispatch(modifyAllStateAction(isdone))
    }

    // 设置初始全选框值
    function isChecked() {
        const totalNum = todoList.length
        return doneNum === totalNum && totalNum !== 0 ? true : false
    }

    // 输入完成，添加todo
    function handleFinish(e) {
        const { keyCode, target } = e
        if (keyCode !== 13) return;
        if (target.value.trim() === '') return
        const todoObj = { id: id_num, name: target.value, isdone: false }
        dispatch(addAction(todoObj))
        target.value = ''
        setId_Num(id_num + 1)
    }

    function handleAll() {
        setType(0)
    }

    function handleActive() {
        setType(1)
    }

    function handleCompleted() {
        setType(2)
    }

    function returnList() {
        switch (type) {
            case 0:
                return todoList
            case 1:
                return todoList.filter((todoObj) => {
                    return todoObj.isdone === false
                })
            default:
                return todoList.filter((todoObj) => {
                    return todoObj.isdone === true
                })
        }
    }

    // 删除选中已完成事项
    function handleClearCompleted() {
        dispatch(deleteDoneAction())
    }

    return (
        <div className="app">
            <div className="todo-header">
                <input type="checkbox" className="input-check" onChange={handleSelectAll} checked={isChecked()} />
                <input type="text" className="input-add" placeholder="What needs to be done?" onKeyUp={handleFinish} />
            </div>
            <ul className="todo-main">
                {
                    returnList().map((todo) => {
                        return <Item key={todo.id} {...todo} />
                    })
                }
            </ul>
            <div className="todo-footer">
                <span>{todoList.length - doneNum} items left</span>
                <span className="btn">
                    <button onClick={handleAll} ref={button_all}>All</button>
                    <button onClick={handleActive}>Active</button>
                    <button onClick={handleCompleted}>Completed</button>
                </span>
                <button onClick={handleClearCompleted} className="btn-clear" style={{
                    display: doneNum > 0 ? 'block' : 'none'
                }}>Clear completed</button>
            </div>
        </div>
    )
}