import React from 'react';

const Resultbody = (props) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  let content = <tr className="none"><td>No Expenses for this period </td></tr>;
  if (props.items.length > 0) {
    content = props.items.map((item) => (
      <tr>
        <td>{item.year}</td>
        <td>{formatter.format(item.savingsEndOfYear)}</td>
        <td>{formatter.format(item.yearlyInterest)}</td>
        <td>{formatter.format(item.totalInterest)}</td>
        <td>{formatter.format(item.totalCapital)}</td>
      </tr>
    ));
  }
  return (
    <tbody>
      {content}
      </tbody>
  )
};

export default Resultbody;