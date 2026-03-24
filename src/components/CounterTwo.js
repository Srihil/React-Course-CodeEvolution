import React, { useState, useMemo } from "react"

function CounterTwo() {

  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const isEven = useMemo(() => {
    let i = 0
    while (i < 2000000000) i++
    return counterTwo % 2 === 0
  }, [counterTwo])

  return (
    <div>

      <button onClick={() => setCounterOne(counterOne + 1)}>
        Counter One - {counterOne}
      </button>

      <span>
        {isEven ? "Even" : "Odd"}
      </span>

      <button onClick={() => setCounterTwo(counterTwo + 1)}>
        Counter Two - {counterTwo}
      </button>

    </div>
  )
}

export default CounterTwo