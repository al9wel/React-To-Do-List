import ToDoList from "./Components/ToDoList"
import { TodosContext } from "./context/todosContext"
import { CategoryContext } from "./context/categoryContext"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
const demo = [
  {
    id: uuidv4(),
    name: "الحياه",
    color: "bg-yellow-200"
  },
  {
    id: uuidv4(),
    name: "العمل",
    color: "bg-green-200"
  },
  {
    id: uuidv4(),
    name: "العائله",
    color: "bg-rose-200"
  },

]
const App = () => {
  const [todos, setTodos] = useState([])
  const [categoryes, setCategoryes] = useState(demo)
  return (
    <TodosContext.Provider value={{ todos: todos, setTodos: setTodos }}>
      <CategoryContext.Provider value={{ categoryes: categoryes, setCategoryes: setCategoryes }}>
        <ToDoList />
      </CategoryContext.Provider>
    </TodosContext.Provider>
  )
}
export default App
