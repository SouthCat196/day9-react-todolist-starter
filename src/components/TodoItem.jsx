import {useContext} from "react";
import styles from "../css/todoitem.module.css"
import {TodoContext} from "../context/TodoContext";
import {
    BEFORE_DELETE_DESCRIPTION,
    BEFORE_DELETE_TITLE,
    DELETE,
    DELETE_NOTICE,
    DONE_NOTICE,
    NO,
    TOGGLE,
    YES
} from "../constant/TodoListConstant";
import {deleteTodoItem, toggleTodoItem} from "../api/todoItems";
import {Button, Col, message, Popconfirm, Row} from "antd";
import {DeleteOutlined, FormOutlined} from "@ant-design/icons";

const TodoItem = (props) => {

    const {id, text, done} = props.todoItem;
    const {dispatch} = useContext(TodoContext);

    const handleDelete = () => {
        deleteTodoItem(id)
            .then(() => {
                dispatch({type: DELETE, payload: id})
                message.success(DELETE_NOTICE);
            })
    }

    const handleToggleCompletion = () => {
        if (!done) {
            message.success(DONE_NOTICE)
        }
        toggleTodoItem({id, text, done: !done})
            .then(() => {
                dispatch({type: TOGGLE, payload: id})
            })
    }

    return (
        <Row className={styles.todoItem} align="middle" justify="space-between">
            <Col flex="auto">
                <span className={done ? styles.done : styles.notDone} onClick={handleToggleCompletion}>
                    {text}
                </span>
            </Col>
            <Col>
                <Button type="primary" className={styles.button} shape="circle" icon={<FormOutlined/>}/>
                <Popconfirm
                    title={BEFORE_DELETE_TITLE}
                    description={BEFORE_DELETE_DESCRIPTION}
                    onConfirm={handleDelete}
                    onCancel={null}
                    okText={YES}
                    cancelText={NO}
                >
                    <Button className={styles.button} shape="circle" icon={<DeleteOutlined/>} danger/>
                </Popconfirm>
            </Col>
        </Row>
    )
}

export default TodoItem;