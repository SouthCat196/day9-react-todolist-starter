import {useContext, useState} from "react";
import styles from "../css/todogenerator.module.css"
import {TodoContext} from "../context/TodoContext";
import {ADD} from "../constant/TodoListConstant";
import {addTodoItem} from "../api/todoItems";
import {Button, message} from "antd";

const TodoGenerator = () => {

    const [text, setText] = useState("")
    const {dispatch} = useContext(TodoContext);
    const [addLoading, setAddLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleAdd = () => {
        setAddLoading(true);
        setText(text.trim());
        if (text !== "") {
            const newTodoItem = {text, done: false};
            addTodoItem(newTodoItem)
                .then((resp) => {
                    dispatch({type: ADD, payload: resp});
                    setText("");
                });
            message.success('Add ok !');
        }
        setAddLoading(false);
    }

    return (
        <div className={styles.todoGenerator}>
            <input value={text} onChange={handleChange} maxLength={100}/>
            {/*<button onClick={handleAdd}>add</button>*/}
            <Button
                type="primary"
                loading={addLoading}
                onClick={handleAdd}
            >
                ADD
            </Button>
        </div>
    )
}

export default TodoGenerator;