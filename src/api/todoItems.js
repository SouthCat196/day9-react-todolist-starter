import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://67495bed868020296630a6a7.mockapi.io/todo",
    timeout: 5000
})

export const getTodoItems = async () => {
    const resp = await axiosInstance.get("/TodoItems");
    return resp.data;
}

export const addTodoItem = async (todoItem) => {
    await axiosInstance.post("/TodoItems", todoItem)
}