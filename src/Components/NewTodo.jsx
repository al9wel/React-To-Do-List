const NewTodo = () => {
    return (
        <>
            <div className="w-full h-32 bg-gray-800 rounded-t-md px-4 py-2 md:rever flex flex-col-reverse md:flex-row  justify-center items-center">
                <button className={` mt-2 lg:mt-0 w-40 duration-300 ml-2  h-10 p-2 rounded-md bg-gray-700 hover:bg-gray-900 font-extrabold flex justify-center items-center text-center cursor-pointer`} >اضافه مهمه </button>
                <div className="mt-2 lg:mt-0 w-full md:flex-1 flex justify-center items-center gap-4">
                    <input className={`w-full outline-0 h-10 border border-gray-700 bg-white rounded-md text-gray-700 p-2`} type="text" placeholder=" اسم المهمه" />
                    <select className="w-24 md:w-40 text-center h-10 border-gray-700 bg-white rounded-md text-gray-700 text-sm" name="" id="">
                        <option>الحياه</option>
                        <option>العمل</option>
                        <option>العائله</option>
                    </select>
                </div>
            </div>
        </>
    )
}
export default NewTodo