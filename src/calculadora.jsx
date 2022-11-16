import { evaluate } from "mathjs"
import { useState } from "react"

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
export const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]]

export const Calculadora = ()=> {
  const [inputValue, setInputValue] = useState('')

  const handleClick = (number)=> {
    setInputValue(inputValue.concat(number))
  }

  const handleOperation = ()=> {
    const result = evaluate(inputValue)
    setInputValue(result)
  }

  return (<>
    <h1>Calculadora</h1>
    <section className="conatiner">
    <input value={inputValue} readOnly />
    {
      rows.map((row, index) => {
        return <div key={index} role='row'>
          {
            row.map(number => {
              return <button onClick={() => handleClick(number)} key={number}>{number}</button>
            })
          }
        </div>
      })
    }
    </section>
    
  </>)
}