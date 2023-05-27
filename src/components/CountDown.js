import React, { useEffect, useState } from 'react'

const CountDown = () => {
    const [count, setCount] = useState(10)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count - 1)
        }, 1000)
        if (count == 0) { 
            clearInterval(interval)
            alert("Times up")
        }
        
    },[count])
  return (
    <div>
          <h1>CountDown</h1>
          <div>{count}</div>
          
          
    </div>
  )
}

export default CountDown
