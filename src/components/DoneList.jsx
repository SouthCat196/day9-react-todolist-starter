import {useContext} from "react";
import {TodoContext} from "../context/TodoContext";

const DoneList = () => {
    const {state} = useContext(TodoContext);
    const doneList = state.filter((todo) => todo.done);

    return (
        <div>
            {doneList.map((todo) => {
                return <div>{todo.text}</div>
            })}
        </div>
    )
}

export default DoneList;