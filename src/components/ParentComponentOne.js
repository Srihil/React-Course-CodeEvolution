import React, { useState, useCallback } from "react"

function ParentComponentOne() {

  const [age, setAge] = useState(25)
  const [salary, setSalary] = useState(50000)

  function Count({ text, count }) {
    console.log(`Rendering ${text}`)
    return (
      <div>
        {text} - {count}
      </div>
    )
  }
  
  
  const incrementAge = useCallback(() => {
    setAge(age + 1)
  }, [age])

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000)
  }, [salary])

  return (
    <div>
      <Count text="Age" count={age} />
      <button onClick={incrementAge}>Increment Age</button>

      <Count text="Salary" count={salary} />
      <button onClick={incrementSalary}>Increment Salary</button>
    </div>
  )
}

export default ParentComponentOne