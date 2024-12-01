import {useContext} from "react";
import styles from "../css/todoitem.module.css"
import {TodoContext} from "../context/TodoContext";
import {DELETE, TOGGLE} from "../constant/TodoListConstant";
import {deleteTodoItem, toggleTodoItem} from "../api/todoItems";
import {Popconfirm, message} from "antd";

const TodoItem = (props) => {

    const {id, text, done} = props.todoItem;
    const {dispatch} = useContext(TodoContext);

    const handleDelete = () => {
        deleteTodoItem(id)
            .then(() => {
                dispatch({type: DELETE, payload: id})
                message.success('Delete OK !')
            })
    }

    const handleToggleCompletion = () => {
        toggleTodoItem({id, text, done: !done})
            .then(() => {
                dispatch({type: TOGGLE, payload: id})
            })
    }

    return (
        <div className={styles.todoItem}>
            <span className={done ? styles.done : styles.notDone}
                  onClick={handleToggleCompletion}>{text}</span>
            <Popconfirm
                title="Delete the task"
                description="Are you sure to delete this task?"
                onConfirm={handleDelete}
                onCancel={null}
                okText="Yes"
                cancelText="No"
            >
                <button>X</button>
            </Popconfirm>
        </div>
    )
}

export default TodoItem;