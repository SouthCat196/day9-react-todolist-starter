import {ADD, DELETE, INIT, TOGGLE} from "../constant/TodoListConstant";

export const initialState = [];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case INIT:
            return action.payload;
        case ADD:
            return [...state, {id: Date.now(), text: action.payload, done: false}]
        case DELETE:
            return state.filter(todo => todo.id !== action.payload);
        case TOGGLE:
            return state.map((todo) =>
                todo.id === action.payload ? { ...todo, done: !todo.done } : todo
            );
        default:
            return state;
    }
};