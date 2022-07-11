import './index.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delete_item, modify_item } from '../../toolkit-store/features/todo_list/todoListSlice'

export default function Item(props) {

    const dispatch = useDispatch()
    const [mouse, setMouse] = useState(false)

    // 修改某一事项的状态
    function handleCheck(id) {
        return (e) => {
            dispatch(modify_item({ id, isdone: e.target.checked }))
        }
    }

    // 删除某一个事项
    function handleDelete(id) {
        return (e) => {
            dispatch(delete_item({ id }))
        }
    }

    // 控制高亮
    function handleMouse(flag) {
        return () => {
            setMouse(flag)
        }
    }

    return (
        <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseEnter={handleMouse(true)} onMouseLeave={handleMouse(false)}>
            <label>
                <input type="checkbox" checked={props.isdone} onChange={handleCheck(props.id)} />
                <span className="list-item">{props.name}</span>
            </label>
            <button onClick={handleDelete(props.id)} className="btn-danger" style={{ display: mouse ? 'block' : 'none' }}>delete</button>
        </li>
    )
}