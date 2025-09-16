import { Delete } from "@mui/icons-material"
import { Edit } from "@mui/icons-material"
import { Check } from "@mui/icons-material"
const Todo = () => {
    return (
        <>
            <div className="bg-white shadow-2xl shadow-gray-300 h-40 m-2 rounded-md">
                <div className="bg-emerald-700 h-2 rounded-t-md w-full"></div>
                <div className="flex justify-between flex-col h-[90%]">
                    <h1 className="  m-4 text-xl text-gray-500 underline underline-offset-8">اهلا لورين ايبسم بكم هنا </h1>
                    <div className="flex justify-between ">
                        <h1 className=" font-medium  mx-4 mt- text-sm w-fit bg-yellow-200 text-gray-500 p-2 rounded-md ">الحياه</h1>
                        <div className="flex justify-center gap-2 ml-2 ">
                            <h1 className=" font-medium   text-sm w-fit bg-yellow-400 text-gray-900 p-2 rounded-md "><Edit /></h1>
                            <h1 className=" font-medium    text-sm w-fit bg-red-400 text-gray-900 p-2 rounded-md "><Delete /></h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Todo