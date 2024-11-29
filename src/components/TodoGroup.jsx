import {useContext} from "react";
import TodoItem from "./TodoItem";
import {TodoContext} from "../context/TodoContext";
import {EMTPY_NOTICE} from "../constant/TodoListConstant";

const TodoGroup = () => {

    const {state: todoList} = useContext(TodoContext);

    return (
        <div>
            {todoList.length === 0 ? <p>{EMTPY_NOTICE}</p> : null}
            {todoList.map((todoItem, _) => {
                return <TodoItem key={todoItem.id} todoItem={todoItem}/>
            })}
        </div>
    )
}

export default TodoGroup;