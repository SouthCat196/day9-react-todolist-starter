import { Flex, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'
import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import {useContext, useEffect, useState} from "react";
import {TodoContext} from "../context/TodoContext";
import {getTodoItems} from "../api/todoItems";
import {INIT} from "../constant/TodoListConstant";

const TodoList = () => {

    const [loading, setLoading] = useState(true);
    const {dispatch} = useContext(TodoContext);

    useEffect(() => {
        getTodoItems().then((todoItems) => {
            dispatch({type: INIT, payload: todoItems});
            setLoading(false);
        })
    }, []);

    return (
        <div>
            {loading ? <Spin indicator={<LoadingOutlined spin />} fullscreen size="large"></Spin> : null}
            <h1>Todo List</h1>
            <TodoGroup/>
            <TodoGenerator/>
        </div>
    );
}

export default TodoList