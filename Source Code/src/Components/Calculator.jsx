import React, { useState } from 'react'
import Keys from './Keys'
import logo from '.././assets/logo.png'

const Calculator = () => {

  const [displayValue, setDisplayValue] = useState('0');
  const [firstValue, setFirstValue] = useState(null);
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);
  const [operator, setOperator] = useState(null);

  const handleOperator = (opr) => {

    if (firstValue === null) {
      setFirstValue(parseFloat(displayValue));
      setWaitingForSecondValue(true);
      setOperator(opr);
    } else {
      let result = calculate(firstValue, parseFloat(displayValue), operator);
      setDisplayValue(result.toString());
      setWaitingForSecondValue(true);
      setFirstValue(parseFloat(result));
      setOperator(opr);
    }

  }

  const updateDisplay = (number) => {
    if (waitingForSecondValue) {
      parseFloat(displayValue) === firstValue ? setDisplayValue(number) : setDisplayValue(displayValue + number);
      setWaitingForSecondValue(false);
    } else {
      displayValue === '0' ? setDisplayValue(number) : setDisplayValue(displayValue + number);
    }
  }

  const handleClear = () => {
    setDisplayValue('0');
    setFirstValue(null);
    setWaitingForSecondValue(false);
    setOperator(null);
  }

  const handleEqual = () => {
    if (operator && firstValue !== null && !waitingForSecondValue) {
      let result = calculate(firstValue, parseFloat(displayValue), operator);
      setDisplayValue(result.toString());
      setFirstValue(parseFloat(result));
      setWaitingForSecondValue(true);
      setOperator(null);
    }
  }

  const handleDelete = () => {

    if (displayValue.length > 1) {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      setDisplayValue('0');
    }

  }

  const calculate = (first, second, operator) => {

    switch (operator) {
      case "+":
        return first + second;
      case "-":
        return first - second;
      case "*":
        return first * second;
      case "/":
        return first / second;

      default:
        return second;
    }
  }


  const handleClick = (e) => {

    const element = e.target

    if (element.classList.contains('operator')) {
      handleOperator(element.value)
      return
    }

    if (element.classList.contains('decimal')) {
      if (!displayValue.includes(".")) {
        setDisplayValue(displayValue + '.')
      }
      return
    }

    if (element.classList.contains('clear')) {
      handleClear();
      return
    }

    if (element.classList.contains('equal')) {
      handleEqual();
      return
    }

    if (element.classList.contains('delete')) {
      handleDelete();
      return;
    }

    updateDisplay(element.value)
  };

  return (
    <div className='calculator'>

      <div className="logo">
        <img src={logo} alt="logo" />
        <span>Calculator</span>
      </div>

      <input className='screen' type="text" disabled value={displayValue} />

      <Keys handleClick={handleClick} />
    </div>
  )
}

export default Calculator