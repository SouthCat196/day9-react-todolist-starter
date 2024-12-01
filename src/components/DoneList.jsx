import TodoGroup from "./TodoGroup";
import {DONE_LIST, DONE_LIST_TITLE, TODO_LIST_TITLE} from "../constant/TodoListConstant";
import TodoListTile from "./TodoListTile";

const DoneList = () => {
    return (
        <div>
            <TodoListTile title={DONE_LIST_TITLE}/>
            <TodoGroup listType={DONE_LIST}/>
        </div>
    )
}

export default DoneList;