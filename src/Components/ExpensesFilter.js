import React from "react";

const ExpensesFilter = () => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__actions">
        <label>Filter by Year</label>
        <select>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
