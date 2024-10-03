import React from 'react'
import { FiDelete } from "react-icons/fi";

const Keys = ({ handleClick }) => {
  return (
    <div className='keys'>

      <button onClick={handleClick} className="delete"><FiDelete /></button>
      <button onClick={handleClick} className="operator" value="+">+</button>
      <button onClick={handleClick} className="operator" value="-">-</button>
      <button onClick={handleClick} className="operator" value="/">&divide;</button>

      <button onClick={handleClick} value="7">7</button>
      <button onClick={handleClick} value="8">8</button>
      <button onClick={handleClick} value="9">9</button>

      <button onClick={handleClick} className="operator" value="*">&times;</button>

      <button onClick={handleClick} value="4">4</button>
      <button onClick={handleClick} value="5">5</button>
      <button onClick={handleClick} value="6">6</button>

      <button onClick={handleClick} value="1">1</button>
      <button onClick={handleClick} value="2">2</button>
      <button onClick={handleClick} value="3">3</button>

      <button onClick={handleClick} className='clear' value="clear">AC</button>
      <button onClick={handleClick} className='zero' value="0">0</button>
      <button onClick={handleClick} className='decimal' value=".">.</button>
      <button onClick={handleClick} className='equal' value="equal">=</button>

    </div>
  )
}

export default Keys