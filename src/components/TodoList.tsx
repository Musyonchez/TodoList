// TodoList.tsx
import { useAtom } from "jotai";
import { todoAtom } from "../utils/state";
import { useRef } from "react";

const TodoList = () => {
  const [todos, setTodos] = useAtom(todoAtom);
  const colorDropdownRef = useRef<HTMLSelectElement>(null);

  const toggleCompletion = (index: number) => {
    const updatedTodos = [...todos];
    const todoToUpdate = updatedTodos[index];
    const updatedTodo = {
      ...todoToUpdate,
      isCompleted: !todoToUpdate.isCompleted,
    };
    updatedTodos.splice(index, 1, updatedTodo); 
    setTodos(updatedTodos);
  };

  const handleColorChange = (
    index: number,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const updatedTodos = [...todos];
    updatedTodos[index].color = event.target.value;
    setTodos(updatedTodos);

    if (colorDropdownRef.current) {
      colorDropdownRef.current.focus();
    }
  };

  return (
    <ul className=" flex flex-wrap mt-5">
      {todos.map((todo, index) => (
        <li
          key={index}
          className="flex flex-col w-48 h-36 ml-4"
          style={
            todo.isCompleted
              ? { backgroundColor: "green" }
              : { backgroundColor: todo.color }
          }
        >
          <div className=" bg-gray-100 w-full justify-between flex px-1">
            <select
              ref={colorDropdownRef}
              value={todo.color}
              onChange={(e) => handleColorChange(index, e)}
            >
              <option value="red">Red</option>
              <option value="blue">Blue</option>
            </select>
            <button>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => toggleCompletion(index)}
              />
            </button>
          </div>
          <p className=" p-1">{todo.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
