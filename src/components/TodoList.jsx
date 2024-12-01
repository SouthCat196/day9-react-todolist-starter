import {Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons'
import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import {useContext, useEffect, useState} from "react";
import {TodoContext} from "../context/TodoContext";
import {getTodoItems} from "../api/todoItems";
import {INIT, TODO_LIST, TODO_LIST_TITLE} from "../constant/TodoListConstant";
import TodoListTile from "./TodoListTile";

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
            {loading ? <Spin indicator={<LoadingOutlined spin/>} fullscreen size="large"></Spin> : null}
            <TodoListTile title={TODO_LIST_TITLE}/>
            <TodoGenerator/>
            <TodoGroup listType={TODO_LIST}/>
        </div>
    );
}

export default TodoList