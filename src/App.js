import './App.css';
import TodoList from "./components/TodoList";
import {TodoProvider} from "./context/TodoContext"
import {BrowserRouter as Router, Link, Navigate, Route, Routes} from "react-router-dom";
import NotFound from "./components/NotFound";
import DoneList from "./components/DoneList";
import Navigation from "./components/Navigation";

function App() {
    return (
        <div className="App">
            <TodoProvider>
                <Router>
                    <Navigation/>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={"/todo-list"}/>}/>
                        <Route path={"/todo-list"} element={<TodoList/>}/>
                        <Route path={"/done-list"} element={<DoneList/>}/>
                        <Route path={"/help"} element={<DoneList/>}/>
                        <Route path={"*"} element={<NotFound/>}/>
                    </Routes>
                </Router>
            </TodoProvider>
        </div>
    );
}

export default App;
