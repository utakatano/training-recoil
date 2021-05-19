import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListState } from './atom'
import { TodoItem } from './TodoItem'
import { TodoItemCreator } from './TodoItemCreator'

export const TodoList: React.FC = () => {
  const todoList = useRecoilValue(todoListState)

  return (
    <div>
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  )
}