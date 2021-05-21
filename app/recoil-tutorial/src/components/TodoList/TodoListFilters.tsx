import React from 'react'
import { useRecoilState } from 'recoil'
import { TodoFilterProps, todoListFilterState } from '../../state/atoms/todoList'

interface FilterMenu {
  value: TodoFilterProps
  label: string
}

const todoFilterMenu: ReadonlyArray<FilterMenu> = [
  {
    value: 'Show All',
    label: 'All'
  }, {
    value: 'Show Completed',
    label: 'Completed'
  }, {
    value: 'Show Uncompleted',
    label: 'Uncompleted'
  }
]

export const TodoListFilters: React.FC = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const updateFilter = ({target: {value}}: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(value as TodoFilterProps)
  }

  return (
    <div>
      Filter:
      <select value={filter} onChange={updateFilter}>
        {todoFilterMenu.map(({value, label}, index) => (
          <option key={`menu-${index}`} value={value}>{label}</option>
        ))}
      </select>
    </div>
  )
}