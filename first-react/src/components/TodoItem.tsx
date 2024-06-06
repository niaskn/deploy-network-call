import {TodoItemProps} from "../utils/interface"
import { FC } from "react";

const TodoItem: FC<TodoItemProps> = ({todo, onDelete, onToggle}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-sm">
    <div className="flex items-center">
    <input
    type="checkbox"
    checked={todo.completed}
    onChange={()=> onToggle(todo.id)}
    className="mr-4"
    />
    <span className={`${todo.completed ? "line-through" : ""}`}>
        {todo.text}
    </span>
    </div>
    <button
    onClick={()=> onDelete (todo.id)}
    className="px-3 py-1 text-white bg-red-500 rounded-lg hover: bg-red-600">
    Delete
    </button>
    </div>
  )
}

export default TodoItem