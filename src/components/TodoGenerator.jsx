import {useContext, useState} from "react";
import styles from "../css/todogenerator.module.css"
import {TodoContext} from "../context/TodoContext";
import {ADD} from "../constant/TodoListConstant";

const TodoGenerator = () => {

    const [text, setText] = useState("")
    const {dispatch} = useContext(TodoContext);

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleAdd = () => {
        if (text !== "") {
            dispatch({type: ADD, payload: text});
        }
    }

    return (
        <div className={styles.todoGenerator}>
            <input value={text} onChange={handleChange} maxLength={100}/>
            <button onClick={handleAdd}>add</button>
        </div>
    )
}

export default TodoGenerator;