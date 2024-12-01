import {ADD, DELETE, INIT, UPDATE} from "../constant/TodoListConstant";

export const initialState = [];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case INIT:
            return action.payload;
        case ADD:
            return [...state, action.payload]
        case DELETE:
            return state.filter(todo => todo.id !== action.payload);
        case UPDATE:
            return state.map((todo) =>
                todo.id === action.payload.id ? action.payload : todo
            );
        default:
            return state;
    }
};