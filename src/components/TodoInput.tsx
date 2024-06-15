// TodoInput.tsx
import { FC, FormEvent } from "react";
import { useState } from "react";

interface TodoInputProps {
  onAdd: (todo: string) => void;
}

const TodoInput: FC<TodoInputProps> = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) return;
    onAdd(value);
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" pt-5 w-full justify-center flex space-x-3"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter a new to-do"
        className=" w-96 border-4 p-1 rounded-lg border-black"
      />
      <button
        type="submit"
        disabled={value.length <= 10}
        className={`px-3 rounded-md text-md ${value.length <= 10? 'bg-gray-200' : 'bg-green-500'}`}
        >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
