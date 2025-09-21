import { Delete } from "@mui/icons-material"
import { Edit } from "@mui/icons-material"
import { Check } from "@mui/icons-material"
import { useState } from "react"
const Todo = ({ todo, handleCompletedTodo, handleUpdateTodo, handleDeleteTodo }) => {
    const [open, setOpen] = useState(true)
    const [title, setTitle] = useState(todo.title)
    return (
        <>
            <div onMouseLeave={() => setOpen(!false)} className="bg-white shadow-2xl shadow-gray-300 m-2 rounded-md pb-1 duration-300">
                <div className={`${todo.isCompleted ? "bg-emerald-700" : "bg-gray-600"} duration-200 h-2 rounded-t-md w-full`}></div>
                <h1 className={`font-medium m-2  text-[12px] md:text-sm w-20 md:w-22 ${todo.category.color} text-gray-500 text-center rounded-md `}>{todo.category.name}</h1>
                <h1 className=" m-4 text-[18px] md:text-2xl text-gray-700 underline underline-offset-8">{todo.title}</h1>
                <div className="m-2 mt-6 md:mt-12 flex gap-2">
                    <span onClick={() => handleCompletedTodo(todo.id)} className={`w-[18px] hover:bg-green-200 duration-150 cursor-pointer h-[18px] border ${todo.isCompleted ? "border-green-600 text-green-600 " : "border-gray-400 text-gray-400 "} rounded-full p-4 flex justify-center items-center`}><Check className=" text-[18px]! md:text-[24px]!" /></span>
                    <span onClick={() => setOpen(!open)} className="w-[18px] hover:bg-cyan-200 duration-150 cursor-pointer h-[18px] border border-cyan-600 text-cyan-600 rounded-full p-4 flex justify-center items-center"><Edit className=" text-[18px]! md:text-[24px]!" /></span>
                    <span onClick={() => handleDeleteTodo(todo.id)} className="w-[18px] hover:bg-red-200 duration-150 cursor-pointer h-[18px] border border-red-400 text-red-400 rounded-full p-4 flex justify-center items-center"><Delete className=" text-[18px]! md:text-[24px]!" /></span>
                </div>
                <div className={`w-full p-2 ${open ? "hidden" : ""}`}>
                    <input value={title} onChange={e => setTitle(e.target.value)} className={` w-full mb-2 outline-0 border-b-2 border-gray-700 text-gray-700 p-2 text-[14px] md:text-[18px]`} type="text" placeholder="اسم التصنيف" />
                    <button onClick={() => { handleUpdateTodo(todo.id, title); setOpen(!false) }} className={` duration-300 w-full p-1 rounded-md bg-gray-700 hover:bg-gray-900 text-[14px] md:text-[18px] font-extrabold cursor-pointer`} >تعديل</button>
                </div>
            </div>
        </>
    )
}
export default Todo