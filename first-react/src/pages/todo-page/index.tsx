import {FC, useState} from "react";
import TodoItem from "../../components/TodoItem";

interface Todo {
  id?:  number;
  text?: string;
  completed?: boolean;
}
const TodoPage: FC<Todo> = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo]= useState("");
  const addTodo=()=> {
    if (newTodo.trim()) {
      setTodos([
        ...todos, {
          id: Date.now(),
          text: newTodo,
          completed: false,
        }
      ]);
      setNewTodo("");
    }
  };
  const toggleTodo=(id:number) => {
    setTodos (
      todos.map((todo: any) =>
        todo.id === id ? {
          ...todo,
          completed: !todo.completed,
        }
        :todo
      )
    )
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo)=>todo.id !== id));
  }
  return (
    <div className="w-screen h-full flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="w-full max-w-md">
       <div className="flex mb-4">
       <input
        type="text"
        value={newTodo}
        onChange={(e)=> setNewTodo(e.target.value)}
        className="flex-grow px-4 py-2 mr-2 border rounded-lg focus:outline-none"
        placeholder="Add a new todo"/>
        <button onClick={addTodo}
        className="px-4 py-2 text-white bg-blue-500 rounded-lg hover-bg-blie-600">
          Add
        </button>
       </div>
       <div className="space-y-2">
        {todos?.map((todo:any)=>{
          return (
            <TodoItem
            key={todo.id}
            todo= {todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}/>
          )
        })}
      </div>
      </div>
    </div>
  )
  
}

export default TodoPage;