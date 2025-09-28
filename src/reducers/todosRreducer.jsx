import { v4 as uuidv4 } from 'uuid';
export const todosReducer = (todos, action) => {
    switch (action.type) {
        case "added": {
            if (action.payload.selectedId === "") {
                const newTodo = {
                    id: uuidv4(),
                    title: action.payload.title,
                    isCompleted: false,
                    category: {
                        id: uuidv4(),
                        name: "عشوائي",
                        color: "bg-blue-200"
                    }
                }
                localStorage.setItem("todos", JSON.stringify([...todos, newTodo]))
                return [...todos, newTodo]
            }
            const category = action.payload.categoryes.find(option => option.id === action.payload.selectedId);
            const newTodo = {
                id: uuidv4(),
                title: action.payload.title,
                isCompleted: false,
                category: category
            }
            localStorage.setItem("todos", JSON.stringify([...todos, newTodo]))
            return [...todos, newTodo]
        }
        case "updated": {
            const filterdTodos = todos.map((t) => {
                t.id == action.payload.id && action.payload.title != "" ? t.title = action.payload.title : ""
                return t
            })
            localStorage.setItem("todos", JSON.stringify(filterdTodos))
            return filterdTodos
        }
        case "completed": {
            const filterdTodos = todos.map((t) => {
                if (t.id == action.payload.id) {
                    const n = { ...t, isCompleted: !t.isCompleted }
                    return n
                }
                return t
            })
            localStorage.setItem("todos", JSON.stringify(filterdTodos))
            return filterdTodos
        }
        case "deleted": {
            const filterdTodos = todos.filter((t) => {
                return t.id != action.payload.id
            })
            localStorage.setItem("todos", JSON.stringify(filterdTodos))
            return filterdTodos
        }

        case "get": {
            return action.payload.todos
        }

        default: {
            throw Error("Unkonwn Action" + action.type)
        }
    }
}