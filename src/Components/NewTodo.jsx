const NewTodo = () => {
    return (
        <>
            <div className="w-full bg-gray-800 rounded-t-md py-4 md:py-6 px-2 md:px-6 gap-2  flex  justify-center items-center">
                <button className={` text-[12px] md:text-[16px] border border-gray-400 py-1 md:py-2 px-1 md:px-4 duration-300 rounded-md bg-gray-700 hover:bg-gray-900 font-medium flex justify-center items-center text-center cursor-pointer`} >اضافه </button>
                <div className="w-full flex justify-center items-center gap-4">
                    <input className={`w-full outline-0 border-b-2  border-gray-300 bg-gray-800  text-gray-300 p-2 text-[11px] md:text-[18px]`} type="text" placeholder=" اسم المهمه" />
                    <select className="outline-0 border-1 rounded-md  border-gray-300 bg-gray-700  text-gray-300 p-1 md:p-2 text-[11px] md:text-[18px]" name="" id="">
                        <option className="bg-gray-700  text-gray-300 hover:bg-gray-800!"> الحياه</option>
                        <option className="bg-gray-700  text-gray-300 hover:bg-gray-800!">العمل</option>
                        <option className="bg-gray-700  text-gray-300 hover:bg-gray-800!">العائله</option>
                    </select>
                </div>
            </div>
        </>
    )
}
export default NewTodo