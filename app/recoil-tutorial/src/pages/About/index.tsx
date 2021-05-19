import React from 'react'
import { atom, useRecoilState } from 'recoil'
import { Counter } from '../../components/Counter'

export const About: React.FC = () => {
  // use recoil
  const countState = atom({
    key: 'countState',
    default: 0
  })

  const [count, setCount] = useRecoilState(countState)

  return (
    <div>
      This is About page.

      <div>
        <Counter
          headingText='case: useRecoilState'
          count={count}
          setCount={() => {
            setCount(count + 1)
          }}
        />
      </div>
    </div>
  )
}