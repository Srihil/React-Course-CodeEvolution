import React, { useState } from 'react'

export const UseState = () => {
  const [count, setCount] = useState(0)
  console.log("rendered")

  return (
    <div>
      <button onClick={() => {setCount(count + 1)}}>Count - {count}</button>    
    </div>
  )
}

export default UseState
