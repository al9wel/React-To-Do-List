import { useEffect, useState } from "react"
import SideBar from "./SideBar"
import Todos from "./Todos"
import { v4 as uuidv4 } from "uuid"
// import { TodosContext } from "../context/todosContext"
import { CategoryContext } from "../context/categoryContext"
import { FilterContext } from "../context/filterContext"
import Toast from "./Toast"
import ToastProvider from "../context/toastContext"
import TodosProvider from "../context/todosContext"
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
// import { TodosContext } from "../context/todosContext"
const ToDoList = () => {
    const [categoryes, setCategoryes] = useState(demo)
    const [filter, setFilter] = useState("all")
    useEffect(() => {
        const c = JSON.parse(localStorage.getItem("categoryes"))
        if (c) {
            setCategoryes(c)
        }
    }, [])
    return (
        <>
            <div style={{ direction: "rtl" }} className="min-h-screen bg-gray-900 flex">
                <TodosProvider>
                    <CategoryContext.Provider value={{ categoryes, setCategoryes }}>
                        <FilterContext.Provider value={{ filter, setFilter }}>
                            <ToastProvider>
                                <SideBar />
                                <Todos />
                            </ToastProvider>
                        </FilterContext.Provider>
                    </CategoryContext.Provider>
                </TodosProvider>
            </div>
        </>
    )
}
export default ToDoList