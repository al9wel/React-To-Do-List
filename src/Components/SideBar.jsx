import { MenuOpen } from "@mui/icons-material";
import { Cancel } from "@mui/icons-material";
import { AddCircleOutline } from "@mui/icons-material";
const categories = [
    {
        id: 1,
        title: "الحياه",
        color: "bg-yellow-400"
    },
    {
        id: 2,
        title: "العمل",
        color: "bg-blue-400"
    },
    {
        id: 3,
        title: "العائله",
        color: "bg-green-400"
    },

]
const SideBar = ({ open, handleOpen }) => {
    const t = open ? <Cancel /> : <MenuOpen />;
    let categoriesList = categories.map((c) => {
        return (
            <div key={c.id} className={`${open ? "" : "hidden"} flex justify-between items-center mt-4`}>
                <h1 className={` text-gray-900 text-center font-light`}>{c.title}</h1>
                <div className={` flex-1 mr-4 h-1 ${c.color}`}></div>
            </div>
        )
    })
    return (
        <>
            <div className={`${open ? "w-32 md:w-52 lg:w-72" : "w-12 md:w-20"} bg-blue-100 rounded-l-md gap-2 flex flex-col justify-start p-2 duration-300 ease-in-out `} >
                <button className={`${open ? "bg-gray-700 hover:bg-gray-900" : "bg-gray-900 hover:bg-gray-950"} duration-300 w-full h-12 p-2 rounded-md font-extrabold flex justify-center items-center text-center cursor-pointer`} onClick={handleOpen}>{t}</button>
                <div className={`${open ? "hidden" : ""} w-full h-6 flex items-center justify-center mt-24  rounded-md bg-gray-700 text-center`}>
                    <h1 style={{ height: "70px", fontSize: "35px" }}>...</h1>
                </div>
                <div className={`${open ? "hidden" : ""} w-full h-6 flex items-center justify-center mt-2  rounded-md bg-gray-700 text-center`}>
                    <h1 style={{ height: "70px", fontSize: "35px" }}>...</h1>
                </div>
                <div className={`${open ? "hidden" : ""} w-full h-6 flex items-center justify-center mt-12  rounded-md bg-gray-700 text-center`}>
                    <h1 style={{ height: "70px", fontSize: "35px" }}>...</h1>
                </div>
                <div className={`${open ? "hidden" : ""} w-full h-6 flex items-center justify-center mt-24  rounded-md bg-gray-700 text-center`}>
                    <h1 style={{ height: "70px", fontSize: "35px" }}>...</h1>
                </div>
                <div className={`${open ? "hidden" : ""} w-full h-6 flex items-center justify-center mt-2  rounded-md bg-gray-700 text-center`}>
                    <h1 style={{ height: "70px", fontSize: "35px" }}>...</h1>
                </div>
                <h1 className={`${open ? "" : "hidden"} w-full mt-12 h-12 p-2 text-gray-900 text-center text-xl font-bold overflow-hidden`}>الفلتره</h1>
                <button className={` ${open ? "" : "hidden"} duration-300 mb-1 w-full h-8 p-2 rounded-md bg-cyan-700 hover:bg-cyan-900 font-extrabold flex justify-center items-center text-center cursor-pointer`} >الكل</button>
                <button className={` ${open ? "" : "hidden"} duration-300 mb-1 w-full h-8 p-2 rounded-md bg-emerald-700 hover:bg-emerald-900  font-extrabold flex justify-center items-center text-center cursor-pointer`} >مكتمله</button>
                <button className={` ${open ? "" : "hidden"} duration-300 mb-0 w-full h-8 p-2 rounded-md bg-rose-700 hover:bg-rose-900 font-extrabold flex justify-center items-center text-center cursor-pointer`} > غير مكتمله </button>
                <h1 className={`${open ? "" : "hidden"} w-full mt-12 h-12 p-2 text-gray-900 text-center text-xl font-bold overflow-hidden`}>التصنيفات</h1>
                <input className={` ${open ? "" : "hidden"} outline-0 border border-gray-700 bg-white rounded-md text-gray-700 p-2`} type="text" placeholder="اسم التصنيف" />
                <button className={` ${open ? "" : "hidden"} duration-300 mb-8 w-full h-12 p-2 rounded-md bg-gray-700 hover:bg-gray-900 font-extrabold flex justify-center items-center text-center cursor-pointer`} ><AddCircleOutline /></button>
                {categoriesList}
            </div>
        </>
    )
}
export default SideBar