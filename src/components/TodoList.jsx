import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import {useContext, useEffect} from "react";
import {TodoContext} from "../context/TodoContext";
import {getTodoItems} from "../api/todoItems";
import {INIT} from "../constant/TodoListConstant";

const TodoList = () => {

    const {dispatch} = useContext(TodoContext);

    useEffect(() => {
        getTodoItems().then((todoItems) => {
            dispatch({type: INIT, payload: todoItems});
        })
    }, []);

    return (
        <div>
            <h1>Todo List</h1>
            <TodoGroup/>
            <TodoGenerator/>
        </div>
    );
}

export default TodoList