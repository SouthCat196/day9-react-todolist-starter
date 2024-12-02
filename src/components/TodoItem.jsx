import {useContext, useState} from "react";
import styles from "../css/todoitem.module.css"
import {TodoContext} from "../context/TodoContext";
import {
    BEFORE_DELETE_DESCRIPTION,
    BEFORE_DELETE_TITLE,
    DELETE,
    DELETE_NOTICE, DONE_LIST,
    DONE_NOTICE,
    MODIFIED_NOTICE, MODIFIED_WINDOW_TITLE,
    NO,
    NOTHING_MODIFIED_NOTICE, TODO_LIST,
    UPDATE,
    YES
} from "../constant/TodoListConstant";
import {deleteTodoItem, updateTodoItem} from "../api/todoItems";
import {Button, Col, Input, message, Modal, Popconfirm, Row} from "antd";
import {DeleteOutlined, FormOutlined} from "@ant-design/icons";

const TodoItem = (props) => {

    const {id, text, done} = props.todoItem;
    const {dispatch} = useContext(TodoContext);
    const [isEditWindowOpen, setIsEditWindowOpen] = useState(false);
    const [editText, setEditText] = useState(text);

    const handleDelete = () => {
        deleteTodoItem(id)
            .then(() => {
                dispatch({type: DELETE, payload: id})
                message.success(DELETE_NOTICE);
            })
    }

    const handleToggleCompletion = () => {
        if (props.listType === DONE_LIST) {
            return;
        }
        if (!done) {
            message.success(DONE_NOTICE)
        }
        updateTodoItem({id, text, done: !done})
            .then(() => {
                dispatch({type: UPDATE, payload: {id, text, done: !done}})
            })
    }

    const openEditWindow = () => {
        setEditText(text);
        setIsEditWindowOpen(true);
    }

    const handleOk = () => {
        if (editText === text) {
            message.info(NOTHING_MODIFIED_NOTICE);
        } else {
            updateTodoItem({id, text: editText, done})
                .then(() => {
                    dispatch({type: UPDATE, payload: {id, text: editText, done: false}})
                    message.success(MODIFIED_NOTICE);
                }).finally(() => {
                setIsEditWindowOpen(false);
            })
        }
    }

    const handleCancel = () => {
        setEditText(text);
        setIsEditWindowOpen(false);
    }

    const handleEditTextChange = (event) => {
        if (event.target.value.length >= 100) {
            return;
        }
        setEditText(event.target.value);
    }

    return (
        <div>
            <Row className={styles.todoItem} align="middle" justify="space-between">
                {props.listType === TODO_LIST &&
                    <Col>
                        <Button type="primary" className={styles.button} shape="circle" icon={<FormOutlined/>}
                                onClick={openEditWindow}/>
                    </Col>}
                <Col flex="auto" onClick={handleToggleCompletion}>
                <span className={done ? styles.done : styles.notDone}>
                    {text}
                </span>
                </Col>
                {props.listType === TODO_LIST &&
                    <Col>
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
                    </Col>}
            </Row>
            <Modal title={MODIFIED_WINDOW_TITLE} open={isEditWindowOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input value={editText} onChange={handleEditTextChange}/>
            </Modal>
        </div>
    )
}

export default TodoItem;