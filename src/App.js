import './App.css';
import TodoList from "./components/TodoList";
import {TodoProvider} from "./context/TodoContext"
import {BrowserRouter as Router, Link, Navigate, Route, Routes} from "react-router-dom";
import NotFound from "./components/NotFound";
import DoneList from "./components/DoneList";

function App() {
    return (
        <div className="App">
            <TodoProvider>
                <Router>
                    <nav>
                        <Link to={"/todo-list"}>Home</Link> | <Link to={"/done-list"}>Done List</Link>
                    </nav>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={"/todo-list"}/>}/>
                        <Route path={"/todo-list"} element={<TodoList/>}/>
                        <Route path={"/done-list"} element={<DoneList/>}/>
                        <Route path={"*"} element={<NotFound/>}/>
                    </Routes>
                </Router>
            </TodoProvider>
        </div>
    );
}

export default App;
