import { useState } from "react";
import NewTodo from "./NewTodo"
import Todo from "./Todo"
const Todos = () => {
    const [todos, setTodos] = useState([])
    const handleNewTodo = (t) => {
        t.title != "" ? setTodos([...todos, t]) : ""
    }
    const handleCompletedTodo = (id) => {
        const ttt = todos.map((t) => {
            t.id == id ? t.isCompleted = !t.isCompleted : ""
            return t
        })
        setTodos(ttt)
    }
    const handleUpdateTodo = (id, title) => {
        const ttt = todos.map((t) => {
            t.id == id && title != "" ? t.title = title : ""
            return t
        })
        setTodos(ttt)
    }
    const handleDeleteTodo = (id) => {
        const ttt = todos.filter((t) => {
            return t.id != id
        })
        setTodos(ttt)
    }
    const todosJSX = todos.map((t) => {
        return <Todo handleDeleteTodo={handleDeleteTodo} handleUpdateTodo={handleUpdateTodo} handleCompletedTodo={handleCompletedTodo} key={t.id} todo={t} />
    })
    return (
        <>
            <div className="m-4 hhh bg-gray-300 rounded-md flex-1">
                <NewTodo handleNewTodo={handleNewTodo} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
                    {/* <div style={{ backgroundColor: "#000000ab" }} className="absolute w-full h-10">
                    </div> */}
                    {todosJSX}
                </div>
            </div >
        </>
    )
}
export default Todos