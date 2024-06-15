// state.ts
import { atom } from 'jotai';

// Conceptualizing a type for a todo item
type TodoItem = {
  text: string;
  isCompleted: boolean;
  color: string;
};

// Initializing the atom with an empty array
export const todoAtom = atom<TodoItem[]>([]);
