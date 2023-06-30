import React, {useState} from 'react';

const CalcForm = () => {

  const [enteredCurrentSavings, setEnteredCurrentSavings] = useState(0.0);
  const [enteredYearlyContribution, setEnteredYearlyContribution] = useState(0.0);
  const [enteredExpectedReturn, setEnteredExpectedReturn] = useState(0.0);
  const [enteredDuration, setEnteredDuration] = useState(0);

  const inputChangeHandler = (identifier, value) => {
    if(identifier === 'current-savings') {
      setEnteredCurrentSavings(value);
    } else if (identifier === 'yearly-contribution') {
      setEnteredYearlyContribution(value);
    } else if (identifier === 'expected-return') {
      setEnteredExpectedReturn(value);
    } else if (identifier === 'duration'){
      setEnteredDuration(value);
    } else {
      console.log("Invalid identifier");
      console.log(value);
    }
  };

  const resetHandler = (event) => {
    event.preventDefault();
    console.log("Reset clicked");
  }

  const calcHandler = (event) => {
    event.preventDefault();

    const calcData = {
      currentSavings: +enteredCurrentSavings,
      yearlyContribution: +enteredYearlyContribution,
      expectedReturn: +enteredExpectedReturn,
      duration: +enteredDuration
    }
    console.log("Submit clicked.");
    console.log(calcData);
  }
  return (
    <form className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings"
            onChange={(event => {
              inputChangeHandler('current-savings', event.target.value);
            })} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution"
            onChange={(event => {
              inputChangeHandler('yearly-contribution', event.target.value);
            })} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return"
            onChange={(event => {
              inputChangeHandler('expected-return', event.target.value);
            })} />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration"
            onChange={(event => {
              inputChangeHandler('duration', event.target.value);
            })} />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button" onClick={calcHandler}>
          Calculate
        </button>
      </p>
    </form>
  )
};

export default CalcForm;