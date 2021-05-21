import React from 'react'
import { useRecoilState } from 'recoil'
import { TodoItemProps, todoListState } from '../../state/atoms/todoList'

interface Props {
  item: TodoItemProps
}

const replaceItemAtIndex = (arr: ReadonlyArray<TodoItemProps>, index: number, newValue: TodoItemProps) => {
  return [
    ...arr.slice(0, index),
    newValue,
    ...arr.slice(index + 1)
  ]
}

const removeItemAtIndex = (arr: ReadonlyArray<TodoItemProps>, index: number) => {
  return [
    ...arr.slice(0, index),
    ...arr.slice(index + 1)
  ]
}

export const TodoItem: React.FC<Props> = ({item}) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const index = todoList.findIndex((listItem) => listItem === item)

  const editItemText = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item, 
      text: value
    })

    setTodoList(newList)
  }

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete
    })

    setTodoList(newList)
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index)
    setTodoList(newList)
  }

  return (
    <div>
      <input type='text' value={item.text} onChange={editItemText} />
      <input
        type='checkbox'
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  )
}