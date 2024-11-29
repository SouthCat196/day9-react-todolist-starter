import {useContext} from "react";
import styles from "../css/todoitem.module.css"
import {TodoContext} from "../context/TodoContext";
import {DELETE, TOGGLE} from "../constant/TodoListConstant";
import {deleteTodoItem, toggleTodoItem} from "../api/todoItems";

const TodoItem = (props) => {

    const {id, text, done} = props.todoItem;

    const {dispatch} = useContext(TodoContext);

    const handleDelete = () => {
        deleteTodoItem(id)
            .then(() => {
                dispatch({type: DELETE, payload: id})
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
            <button onClick={handleDelete}>X</button>
        </div>
    )
}

export default TodoItem;