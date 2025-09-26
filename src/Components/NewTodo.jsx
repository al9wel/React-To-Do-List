import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { useContext } from "react";
import { TodosContext } from "../context/todosContext";
import { CategoryContext } from "../context/categoryContext";

const NewTodo = () => {
    const [title, setTitle] = useState("")
    const [selectedId, setSelectedId] = useState("")
    const { todos, setTodos } = useContext(TodosContext)
    const { categoryes } = useContext(CategoryContext)
    const handleNewTodo = () => {
        console.log("ss")
        if (selectedId === "") {
            const newTodo = {
                id: uuidv4(),
                title: title,
                isCompleted: false,
                category: {
                    id: uuidv4(),
                    name: "عشوائي",
                    color: "bg-blue-200"
                }
            }
            if (newTodo.title != "") {
                setTodos([...todos, newTodo])
                setTitle("")
                localStorage.setItem("todos", JSON.stringify([...todos, newTodo]))
            }
            return
        }
        const category = categoryes.find(option => option.id === selectedId);
        const newTodo = {
            id: uuidv4(),
            title: title,
            isCompleted: false,
            category: category
        }
        if (newTodo.title != "") {
            setTodos([...todos, newTodo])
            setTitle("")
            localStorage.setItem("todos", JSON.stringify([...todos, newTodo]))
        }
    }
    const categoryJSX = categoryes.map((c) => {
        return <option key={c.id} value={c.id} className="bg-gray-700  text-gray-300 hover:bg-gray-800!"> {c.name}</option>
    })
    return (
        <>
            <div className="w-full bg-gray-800 rounded-t-md py-4 md:py-6 px-2 md:px-6 gap-4 md:gap-2 flex flex-col-reverse md:flex-row justify-center items-center">
                <button onClick={handleNewTodo} className={` text-[16px] md:text-[18px] border border-gray-400 py-1 md:py-1 px-10 md:px-7 duration-300 rounded-md bg-gray-700 hover:bg-gray-900 font-medium flex justify-center items-center text-center cursor-pointer`} > اضافه </button>
                <div className="w-full flex justify-center items-center gap-4">
                    <input value={title} onChange={(e) => setTitle(e.target.value)} className={`w-full outline-0 border-b-2  border-gray-300 bg-gray-800  text-gray-300 p-1 text-[16px] md:text-[18px]`} type="text" placeholder=" اسم المهمه" />
                    <select value={selectedId} onChange={e => setSelectedId(e.target.value)} className="outline-0 border-1 mt-2 md:mt-0 rounded-md  border-gray-300 bg-gray-700  text-gray-300 py-1 md:py-1.5 px-3 text-[14px] md:text-[18px]" name="" id="">
                        <option value={""} className="bg-gray-700  text-gray-300 hover:bg-gray-800!">اختار</option>
                        {categoryJSX}
                    </select>
                </div>
            </div>
        </>
    )
}
export default NewTodo