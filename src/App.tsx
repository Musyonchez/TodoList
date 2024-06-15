// App.tsx
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { useAtom } from "jotai";
import { todoAtom } from "./utils/state";

const App = () => {
  const setTodos = useAtom(todoAtom)[1];

  const addTodo = (newTodoText: string) => {
    console.log("new todo", newTodoText);
    setTodos((currentTodos) => [
      ...currentTodos,
      { text: newTodoText, isCompleted: false, color: "blue" },
    ]);
  };

  return (
    <div className=" w-full min-h-screen flex flex-col items-center p-4">
      <h1 className=" font-extrabold text-4xl">To-Do List</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList />
    </div>
  );
};

export default App;
