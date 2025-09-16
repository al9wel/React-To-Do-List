import { useState } from "react"
import SideBar from "./SideBar"
import Todos from "./Todos"
const ToDoList = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen((o) => !o)
    }
    return (
        <>
            <div style={{ direction: "rtl" }} className="min-h-screen bg-gray-900 flex">
                <SideBar open={open} handleOpen={handleOpen} />
                <Todos />
            </div>
        </>
    )
}
export default ToDoList