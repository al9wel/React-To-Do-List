import { useEffect, useState } from "react"
import SideBar from "./SideBar"
import Todos from "./Todos"
import { v4 as uuidv4 } from "uuid"
import { TodosContext } from "../context/todosContext"
import { CategoryContext } from "../context/categoryContext"
import { FilterContext } from "../context/filterContext"
const demo = [
    {
        id: uuidv4(),
        name: "الحياه",
        color: "bg-yellow-200"
    },
    {
        id: uuidv4(),
        name: "العمل",
        color: "bg-green-200"
    },
    {
        id: uuidv4(),
        name: "العائله",
        color: "bg-rose-200"
    },

]
const ToDoList = () => {
    const [open, setOpen] = useState(false)
    const [todos, setTodos] = useState([])
    const [categoryes, setCategoryes] = useState(demo)
    const [filter, setFilter] = useState("all")
    const handleOpen = () => {
        setOpen((o) => !o)
    }
    useEffect(() => {
        const t = JSON.parse(localStorage.getItem("todos"))
        if (t) {
            setTodos(t)
        }
        const c = JSON.parse(localStorage.getItem("categoryes"))
        if (c) {
            setCategoryes(c)
        }
    }, [])
    return (
        <>
            <div style={{ direction: "rtl" }} className="min-h-screen bg-gray-900 flex">
                <TodosContext.Provider value={{ todos, setTodos }}>
                    <CategoryContext.Provider value={{ categoryes, setCategoryes }}>
                        <FilterContext.Provider value={{ filter, setFilter }}>
                            <SideBar open={open} handleOpen={handleOpen} />
                            <Todos />
                        </FilterContext.Provider>
                    </CategoryContext.Provider>
                </TodosContext.Provider>
            </div>
        </>
    )
}
export default ToDoList