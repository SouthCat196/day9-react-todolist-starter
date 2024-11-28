import {useContext} from "react";
import {TodoContext} from "../App";
import styles from "../css/todoitem.module.css"

const TodoItem = (props) => {

    const {id, text, done} = props.todoItem;

    const {dispatch} = useContext(TodoContext);

    const handleDelete = () => {
        dispatch({type: "DELETE", payload: id})
    }

    const handleToggleCompletion = () => {
        dispatch({type: "TOGGLE", payload: id})
    }

    return (
        <div className={styles.todoItem}>
            <span className={done ? styles.done : styles.not_done}
                  onClick={handleToggleCompletion}>{text}</span>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}

export default TodoItem;