import {useContext, useState} from "react";
import styles from "../css/todoitem.module.css"
import {TodoContext} from "../context/TodoContext";
import {
    BEFORE_DELETE_DESCRIPTION,
    BEFORE_DELETE_TITLE,
    DELETE,
    DELETE_NOTICE,
    DONE_NOTICE, MODIFIED_NOTICE,
    NO, NOTHING_MODIFIED_NOTICE,
    TOGGLE, UPDATE,
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
        if (!done) {
            message.success(DONE_NOTICE)
        }
        updateTodoItem({id, text, done: !done})
            .then(() => {
                dispatch({type: UPDATE, payload: {id, text, done: !done}})
            })
    }

    const openEditWindow = () => {
        setIsEditWindowOpen(true);
    }

    const handleOk = () => {
        if(editText === text){
            message.info(NOTHING_MODIFIED_NOTICE);
        }else {
            updateTodoItem({id, text: editText, done})
                .then(() => {
                    dispatch({type: UPDATE, payload: {id, text: editText, done:false}})
                })
            setIsEditWindowOpen(false);
            message.success(MODIFIED_NOTICE);
        }
    }

    const handleCancel = () => {
        setIsEditWindowOpen(false);
    }


    return (
        <div>
            <Row className={styles.todoItem} align="middle" justify="space-between">
                <Col flex="auto" onClick={handleToggleCompletion}>
                <span className={done ? styles.done : styles.notDone}>
                    {text}
                </span>
                </Col>
                <Col>
                    <Button type="primary" className={styles.button} shape="circle" icon={<FormOutlined/>}
                            onClick={openEditWindow}/>
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
            <Modal title="编辑任务" open={isEditWindowOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input value={editText} onChange={(e) => setEditText(e.target.value)}/>
            </Modal>
        </div>
    )
}

export default TodoItem;