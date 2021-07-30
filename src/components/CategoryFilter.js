import React from 'react';
import PropTypes from 'prop-types';

function CategoryFilter(props) {
  const { handleFilterChange } = props;
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handler = (e) => {
    const newFilter = e.target.value;
    handleFilterChange(newFilter);
  };

  return (
    <label htmlFor="filter" className="filter categoryfilter">
      Filter by Category:
      {' '}
      <select
        className="form-control"
        id="filter"
        onChange={handler}
      >
        { categories.map((category) => <option key={category}>{category}</option>)}
      </select>
    </label>
  );
}

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
