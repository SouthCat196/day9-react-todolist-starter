export const initialState = [
    {id: Date.now() + Math.random(), text: "the first todo", done: false},
    {id: Date.now() + Math.random(), text: "the second todo", done: false},
];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, {id: Date.now(), text: action.payload, done: false}]
        case "DELETE":
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
};