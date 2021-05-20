import React from 'react'
import { useRecoilValue } from 'recoil'
import { filteredTodoListState } from '../../selectors/todoList'
import { TodoItem } from './TodoItem'
import { TodoItemCreator } from './TodoItemCreator'
import { TodoListFilters } from './TodoListFilters'

export const TodoList: React.FC = () => {
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <div>
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  )
}