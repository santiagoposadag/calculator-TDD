import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Calculadora } from './calculadora'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Calculadora />
    </div>
  )
}

export default App
