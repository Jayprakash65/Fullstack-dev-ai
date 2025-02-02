import { useState } from "react"

function App() {

  const  [message, setMessage] = useState('Namsate Bharat');

  const changeMessage = () => {
    setMessage('Bye');
  }

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={changeMessage}>Click Me </button>
    </div>
  )
}

export default App
