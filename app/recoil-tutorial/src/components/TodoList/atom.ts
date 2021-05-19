import { atom } from 'recoil';

export interface TodoItemProps {
  id: number
  text: string
  isComplete: boolean
}

export const todoListState = atom<ReadonlyArray<TodoItemProps>>({
  key: 'todoListState',
  default: []
})
