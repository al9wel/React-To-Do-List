import { createContext, useReducer, useContext } from "react";
import { todosReducer } from "../reducers/todosRreducer";
const TodosContext = createContext([])
const TodosProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todosReducer, [])
    return (
        <>
            <TodosContext.Provider value={{ todos, dispatch }}>
                {children}
            </TodosContext.Provider>
        </>
    )
}
export const useTodos = () => {
    return useContext(TodosContext)
}
export default TodosProvider
