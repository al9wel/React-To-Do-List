import { Delete } from "@mui/icons-material"
import { Edit } from "@mui/icons-material"
import { Check } from "@mui/icons-material"
import { useState } from "react"
const Todo = () => {
    const [checked, setChecked] = useState(true)
    const handleCheck = () => {
        setChecked((c) => !c)
    }
    return (
        <>
            <div className="bg-white shadow-2xl shadow-gray-300 m-2 rounded-md pb-1">
                <div className={`${checked ? "bg-emerald-700" : "bg-gray-600"} duration-200 h-2 rounded-t-md w-full`}></div>
                <h1 className=" font-medium m-2  text-[12px] md:text-sm w-20 md:w-22 bg-blue-200 text-gray-500 text-center rounded-md ">الحياه</h1>
                <h1 className=" m-4 text-sm md:text-xl text-gray-700 underline underline-offset-8">اهلا لورين ايبسم بكم هنا </h1>
                <div className="m-2 mt-6 md:mt-12 flex gap-2">
                    <span onClick={handleCheck} className={`w-[18px] hover:bg-green-200 duration-150 cursor-pointer h-[18px] border ${checked ? "border-green-600 text-green-600 " : "border-gray-400 text-gray-400 "} rounded-full p-4 flex justify-center items-center`}><Check className=" text-[18px]! md:text-[24px]!" /></span>
                    <span className="w-[18px] hover:bg-cyan-200 duration-150 cursor-pointer h-[18px] border border-cyan-600 text-cyan-600 rounded-full p-4 flex justify-center items-center"><Edit className=" text-[18px]! md:text-[24px]!" /></span>
                    <span className="w-[18px] hover:bg-red-200 duration-150 cursor-pointer h-[18px] border border-red-400 text-red-400 rounded-full p-4 flex justify-center items-center"><Delete className=" text-[18px]! md:text-[24px]!" /></span>
                </div>
            </div>
        </>
    )
}
export default Todo