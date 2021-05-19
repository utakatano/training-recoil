import React, { useState } from 'react'
import { Counter } from '../../components/Counter'
import { TodoList } from '../../components/TodoList'

export const Home: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      This is Top page.

      <div>
        <Counter
          headingText='case: useState'
          count={count}
          setCount={() => {
            setCount(count + 1)
          }}
        />
      </div>

      <div>
        <TodoList />
      </div>
    </div>
  )
}