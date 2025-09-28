
import NewTodo from "./NewTodo"
import Todo from "./Todo"
// import { TodosContext } from "../context/todosContext";
import { FilterContext } from "../context/filterContext";
import { useContext, useMemo, useEffect } from "react";
import { useTodos } from "../context/todosContext"


const Todos = () => {
    const { todos, dispatch } = useTodos()
    const { filter } = useContext(FilterContext)
    useEffect(() => {
        const t = JSON.parse(localStorage.getItem("todos"))
        if (t) {
            dispatch({ type: "get", payload: { todos: t } })
        }
        console.log(t)
    }, [])
    // caching the data
    // only filterd the data when todos states triggers
    const completed = useMemo(() => {
        return todos.filter((t) => {
            return t.isCompleted
        })
    }, [todos])
    const notCompleted = useMemo(() => {
        return todos.filter((t) => {
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