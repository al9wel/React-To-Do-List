
import NewTodo from "./NewTodo"
import Todo from "./Todo"
import { TodosContext } from "../context/todosContext";
import { FilterContext } from "../context/filterContext";
import { useContext, useMemo } from "react";

const Todos = () => {
    const { todos } = useContext(TodosContext)
    const { filter } = useContext(FilterContext)
    // caching the data
    // only filterd the data when todos states triggers
    const completed = useMemo(() => {
        return todos.filter((t) => {
            console.log("completed")
            return t.isCompleted
        })
    }, [todos])
    const notCompleted = useMemo(() => {
        return todos.filter((t) => {
            console.log("notCompleted")
            return !t.isCompleted
        })
    }, [todos])
    // rendring 
    let todosToBeRendered = todos
    if (filter === "completed") {
        todosToBeRendered = completed
    }
    else if (filter === "notCompleted") {
        todosToBeRendered = notCompleted
    }

    const todosJSX = todosToBeRendered.map((t) => {
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