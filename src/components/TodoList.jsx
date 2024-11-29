import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import styles from "../css/todolist.module.css"

const TodoList = () => {
    return (
        <div>
            <h1>Todo List</h1>
            <TodoGroup/>
            <TodoGenerator/>
        </div>
    );
}

export default TodoList