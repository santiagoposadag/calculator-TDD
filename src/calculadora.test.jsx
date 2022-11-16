import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import {Calculadora, numbers, rows} from './calculadora'




describe('Calculadora', ()=> {

  afterEach(cleanup)

  it('should render the calculator component', ()=>{
    render(<Calculadora />)
  })

  it('Should render inside of the component the Calculadora title', ()=> {

    // Arrange
    render(<Calculadora />)

    //Act and assert
    screen.getByText('Calculadora')
  })

  it('should have the number from 0 to 9', ()=> {

    //Arrange
    render(<Calculadora />)

    //Act and assert
    numbers.forEach(number => {
      screen.getByText(number)
    })
  })

  it('should have four rows of numbers', ()=> {
    // Arrange 
    render(<Calculadora />)

    // Act
    const nodes = screen.getAllByRole('row')

    // Assert
    expect(nodes).toHaveLength(4)
  })

  it('should render an input', ()=> {
    render(<Calculadora />)

    screen.getByRole('textbox')
  })

  it('shoud show me the numbers that have clicked', ()=> {
    render(<Calculadora />)
    const result = '0123456789'

    const numbers_nodes = numbers.map(number => {
      return screen.getByText(number)
    })

    numbers_nodes.forEach(node => {
      fireEvent.click(node)
    })

    const input = screen.getByRole('textbox')

    expect(input.value).toBe(result)

  })
})