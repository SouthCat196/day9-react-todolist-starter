import {useContext} from "react";
import {TodoContext} from "../App";
import TodoItem from "./TodoItem";

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