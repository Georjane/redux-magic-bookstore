import React from 'react';
import PropTypes from 'prop-types';

function CategoryFilter(props) {
  const { handleFilterChange } = props;
  const categories = ['CATEGORIES', 'All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handler = (e) => {
    const newFilter = e.target.value;
    handleFilterChange(newFilter);
  };

  return (
    <div className="filtercat">
      <nav>
        <div className="logo">
          <h1>Bookstore CMS</h1>
          <h3>BOOKS</h3>
          <h4>
            <select
              className="form-control"
              id="filter"
              onChange={handler}
            >
              { categories.map((category) => <option key={category}>{category}</option>)}
            </select>
          </h4>
        </div>
        <div>
          <i className="fa fa-user" />
        </div>
      </nav>
    </div>

  );
}

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
