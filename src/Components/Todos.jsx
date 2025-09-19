
import NewTodo from "./NewTodo"


import Todo from "./Todo"
const Todos = () => {
    return (
        <>
            <div className="m-4 hhh bg-gray-300 rounded-md flex-1">
                <NewTodo />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
                    <Todo />
                    <Todo />
                    <Todo />
                    <Todo />
                </div>
            </div>
        </>
    )
}
export default Todos