
import NewTodo from "./NewTodo"
import Todo from "./Todo"
import { TodosContext } from "../context/todosContext";
import { useContext } from "react";

const Todos = () => {
    const { todos } = useContext(TodosContext)
    const todosJSX = todos.map((t) => {
        return <Todo key={t.id} todo={t} />
    })
    return (
        <>
            <div className="m-4 hhh bg-gray-300 rounded-md flex-1">
                <NewTodo />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
                    {todosJSX}
                </div>
            </div >
        </>
    )
}
export default Todos