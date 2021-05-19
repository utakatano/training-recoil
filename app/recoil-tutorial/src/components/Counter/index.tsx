import React from 'react'

interface Props {
  headingText: string
  count: number
  setCount: () => void
}

export const Counter: React.FC<Props> = ({headingText, count, setCount}) => {
  return (
    <div>
      <p>{headingText}</p>
      <p>{count}</p>
      <button
        onClick={setCount}
      >Count up</button>
    </div>
  )
}