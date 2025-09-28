import { MenuOpen, Delete } from "@mui/icons-material";
import { Cancel } from "@mui/icons-material";
import { AddCircleOutline } from "@mui/icons-material";
import { useContext, useState } from "react";
import { CategoryContext } from "../context/categoryContext";
import { v4 as uuidv4 } from "uuid";
import { FilterContext } from "../context/filterContext";
import { useToast } from "../context/toastContext";
const colors = [
    "bg-green-200",
    "bg-rose-200",
    "bg-yellow-200",
    "bg-fuchsia-200",
    "bg-indigo-200",
]
const SideBar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [categoryName, setCategoryName] = useState("")
    const [number, setNumber] = useState(colors.length - 1)
    const { filter, setFilter } = useContext(FilterContext)
    const { categoryes, setCategoryes } = useContext(CategoryContext)
    const { handleOpenToast } = useToast()
    const handleNewCtegory = () => {
        if (categoryName != "") {
            const randomColor = colors[number]
            if (number == 0) {
                setNumber(colors.length - 1)
            }
            else {
                setNumber(number - 1)
            }
            const newCtegory = {
                id: uuidv4(),
                name: categoryName,
                color: randomColor
            }
            setCategoryes([...categoryes, newCtegory])
            localStorage.setItem("categoryes", JSON.stringify([...categoryes, newCtegory]))
            setCategoryName("")
            handleOpenToast("تم اضافه تصنيف جديد")
        }
    }
    const handleDeleteCategory = (id) => {
        const filterdCategoryes = categoryes.filter((c) => {
            return c.id != id
        })
        setCategoryes(filterdCategoryes)
        localStorage.setItem("categoryes", JSON.stringify(filterdCategoryes))
        handleOpenToast("تم حذف تصنيف")
    }
    let categoryesJSX = categoryes.map((c) => {
        return (
            <div key={c.id} className={`${openMenu ? "" : "hidden"} flex justify-between bg-[#f0f8ffb5] rounded-md p-1 items-center mt-4`}>
                <h1 className={` text-gray-900 text-[16px] md:text-xl text-center font-light`}>{c.name}</h1>
                <div className={` flex-1 mr-4 h-1 ${c.color}`}></div>
                <span onClick={() => handleDeleteCategory(c.id)} className="w-[12px] mr-2 hover:bg-red-200 duration-150 cursor-pointer h-[12px] border border-red-400 text-red-400 rounded-full p-3 flex justify-center items-center"><Delete className=" text-[16px]! " /></span>
            </div>
        )
    })
    return (
        <>
            <div className={`${openMenu ? "w-32 md:w-52 lg:w-72" : "w-12 md:w-20"} bg-blue-100 rounded-l-md gap-2 flex flex-col justify-start p-2 duration-300 ease-in-out `} >
                <div className="flex justify-center items-center">
                    <button className={`${openMenu ? "bg-gray-700 hover:bg-gray-900" : "bg-gray-900 hover:bg-gray-950"} duration-300 w-fit p-1 md:p-2 rounded-md font-extrabold flex justify-center items-center text-center cursor-pointer`} onClick={() => setOpenMenu((o) => !o)}>{openMenu ? <Cancel /> : <MenuOpen />}</button>
                </div>
                <div className={`${openMenu ? "hidden" : ""} w-full h-6 flex items-center justify-center mt-24  rounded-md bg-gray-700 text-center`}>
                    <h1 style={{ height: "70px", fontSize: "35px" }}>...</h1>
                </div>
                <div className={`${openMenu ? "hidden" : ""} w-full h-6 flex items-center justify-center mt-2  rounded-md bg-gray-700 text-center`}>
                    <h1 style={{ height: "70px", fontSize: "35px" }}>...</h1>
                </div>
                <div className={`${openMenu ? "hidden" : ""} w-full h-6 flex items-center justify-center mt-12  rounded-md bg-gray-700 text-center`}>
                    <h1 style={{ height: "70px", fontSize: "35px" }}>...</h1>
                </div>
                <div className={`${openMenu ? "hidden" : ""} w-full h-6 flex items-center justify-center mt-24  rounded-md bg-gray-700 text-center`}>
                    <h1 style={{ height: "70px", fontSize: "35px" }}>...</h1>
                </div>
                <div className={`${openMenu ? "hidden" : ""} w-full h-6 flex items-center justify-center mt-2  rounded-md bg-gray-700 text-center`}>
                    <h1 style={{ height: "70px", fontSize: "35px" }}>...</h1>
                </div>
                <h1 className={`${openMenu ? "" : "hidden"} w-full mt-6 h-12 p-2 text-gray-900 text-center text-xl font-bold`}>الفلتره</h1>
                <div className={`${openMenu ? "" : "hidden"} flex justify-center items-center rounded-md shadow-xs `} role="group">
                    <button onClick={() => setFilter("all")} type="button" className={`${filter === "all" ? "bg-gray-800" : "bg-gray-700"} px-[7px] py-2 text-[14px] lg:text-[16px] md:px-5 lg:px-7 md:py-2 font-light text-white border border-gray-600 rounded-s-lg hover:bg-gray-800 cursor-pointer`}>
                        الكل
                    </button>
                    <button onClick={() => setFilter("completed")} type="button" className={`${filter === "completed" ? "bg-gray-800" : "bg-gray-700"} px-[7px] py-2 text-[14px] lg:text-[16px] md:px-5 lg:px-7 md:py-2  font-light  text-white border-t border-b border-gray-600 hover:bg-gray-800 cursor-pointer`}>
                        مكتمله
                    </button>
                    <button onClick={() => setFilter("notCompleted")} type="button" className={`${filter === "notCompleted" ? "bg-gray-800" : "bg-gray-700"} px-[7px] py-2 text-[14px] lg:text-[16px] md:px-5 lg:px-7 md:py-2 font-light text-white border border-gray-600 rounded-e-lg hover:bg-gray-800 cursor-pointer`}>
                        باقيه
                    </button>
                </div>
                <h1 className={`${openMenu ? "" : "hidden"} w-full mt-6 h-12 p-2 text-gray-900 text-center text-xl font-bold `}>التصنيفات</h1>
                <input value={categoryName} onChange={e => setCategoryName(e.target.value)} className={` ${openMenu ? "" : "hidden"} outline-0 border-b-2  border-gray-700 bg-blue-100  text-gray-700 p-2 text-[16px] md:text-[18px]`} type="text" placeholder="اسم التصنيف" />
                <button onClick={handleNewCtegory} className={` ${openMenu ? "" : "hidden"} duration-300 mb-8 w-full p-1 md:p-2 rounded-md bg-gray-700 hover:bg-gray-900 font-extrabold flex justify-center items-center text-center cursor-pointer`} ><AddCircleOutline /></button>
                <div className={`${openMenu ? "" : "hidden"} flex justify-between bg-[#f0f8ffb5] rounded-md p-1 items-center mt-4`}>
                    <h1 className={` text-gray-900 text-[16px] md:text-xl text-center font-light`}>عشوائي</h1>
                    <div className={` flex-1 mr-4 h-1 bg-blue-200`}></div>
                </div>
                {categoryesJSX}
            </div>
        </>
    )
}
export default SideBar