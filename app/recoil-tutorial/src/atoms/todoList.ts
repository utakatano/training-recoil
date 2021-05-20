import { atom } from 'recoil'

export interface TodoItemProps {
  id: number
  text: string
  isComplete: boolean
}

export type TodoFilterProps = 'Show All' | 'Show Completed' | 'Show Uncompleted'

export const todoListState = atom<ReadonlyArray<TodoItemProps>>({
  key: 'todoListState',
  default: []
})

export const todoListFilterState = atom<TodoFilterProps>({
  key: 'todoListFilterState',
  default: 'Show All'
})