export const initialState = [
    {id: Math.random(), text: "the first todo", done: false},
    {id: Math.random(), text: "the second todo", done: false},
];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, {id: Math.random(), text: action.payload, done: false}]
        case "DELETE":
            return state.filter(todo => todo.id !== action.payload);
        case "TOGGLE":
            // return state.map((todo) =>
            //     todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
            // );
            console.log(state);
            console.log(action.payload);
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return {...todo, done: !todo.done}
                }
                return todo
            })
        default:
            return state;
    }
};