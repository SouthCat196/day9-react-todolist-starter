import {useContext} from "react";
import styles from "../css/todoitem.module.css"
import {TodoContext} from "../context/TodoContext";
import {DELETE, TOGGLE} from "../constant/TodoListConstant";

const TodoItem = (props) => {

    const {id, text, done} = props.todoItem;

    const {dispatch} = useContext(TodoContext);

    const handleDelete = () => {
        dispatch({type: DELETE, payload: id})
    }

    const handleToggleCompletion = () => {
        dispatch({type: TOGGLE, payload: id})
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