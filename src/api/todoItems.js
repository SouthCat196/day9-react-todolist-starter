import axiosInstance from "./interceptor";

export const getTodoItems = async () => {
    const resp = await axiosInstance.get("/todos");
    return resp.data;
}

export const addTodoItem = async (todoItem) => {
    const resp = await axiosInstance.post("/todos", todoItem);
    return resp.data;
}

export const deleteTodoItem = async (id) => {
    await axiosInstance.delete(`/todos/${id}`);
}

export const updateTodoItem = async (todoItem) => {
    const resp = await axiosInstance.put(`/todos/${todoItem.id}`, todoItem);
    return resp.data;
}