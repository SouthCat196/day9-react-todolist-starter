import {useContext} from "react";
import TodoItem from "./TodoItem";
import {TodoContext} from "../context/TodoContext";

const TodoGroup = () => {

    const {state: todoList} = useContext(TodoContext);

    return (
        <div>
            {todoList.map((todoItem, _) => {
                return <TodoItem key={todoItem.id} todoItem={todoItem}/>
            })}
        </div>
    )
}

export default TodoGroup;