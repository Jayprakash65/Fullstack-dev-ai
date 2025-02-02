import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  const increaseNum = () => {
    setCount((count) => {
      if(count<5){
       return count + 1
      }
      return count;
    });
  }

  const decreaseNum = () => {
    setCount((count) => {
      if(count>0){
       return count - 1;
      }
    return count;
    });

  }

  const restCounter = () => {
    setCount(() => {
     return 0
    })
  }

  return (
    <div>
      <h1>Counter App</h1>
      <h1>{count}</h1>
      <button onClick={increaseNum}>+</button>
      <button onClick={decreaseNum}>-</button>
      <button onClick={restCounter} >Reset</button>
    </div>
    
  )
}

export default App
