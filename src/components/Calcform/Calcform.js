import React from 'react';

const CalcForm = () => {
  const inputChangeHandler = (identifier, value) => {
    console.log(identifier);
    console.log(value);
  };
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
              inputChangeHandler('expected-return', event.target.value);
            })} />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  )
};

export default CalcForm;