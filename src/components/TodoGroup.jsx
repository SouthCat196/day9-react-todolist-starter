import {Empty, Typography} from 'antd';
import {useContext} from "react";
import TodoItem from "./TodoItem";
import {TodoContext} from "../context/TodoContext";
import {DONE_LIST, EMTPY_NOTICE} from "../constant/TodoListConstant";

const TodoGroup = ({listType}) => {

    const {state: todoList} = useContext(TodoContext);

    const filterTodoList = (listType, todoList) => {
        switch (listType) {
            case DONE_LIST:
                return todoList.filter(todoItem => todoItem.done);
            default:
                return todoList;
        }
    };

    const filteredTodoList = filterTodoList(listType, todoList);

    return (
        <div>
            {filteredTodoList.length === 0 ?
                <Empty
                    description={
                        <Typography.Text>
                            {EMTPY_NOTICE}
                        </Typography.Text>
                    }/> : null}
            {filteredTodoList.map((todoItem, _) => {
                return <TodoItem key={todoItem.id} todoItem={todoItem}/>
            })}
        </div>
    )
}

export default TodoGroup;