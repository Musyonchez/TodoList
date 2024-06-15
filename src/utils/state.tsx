// state.ts
import { atom } from 'jotai';

type TodoItem = {
  text: string;
  isCompleted: boolean;
  color: string;
};

export const todoAtom = atom<TodoItem[]>([]);
