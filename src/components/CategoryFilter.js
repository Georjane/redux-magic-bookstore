import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CHANGE_FILTER } from '../actions/index';

function CategoryFilter(props) {
  const { CHANGE_FILTER } = props;
  let newFilter;
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handleFilterChange = (e) => {
    newFilter = e.target.value;
    CHANGE_FILTER(newFilter);
  };

  return (
    <label htmlFor="filter" className="filter">
      Filter by Category:
      {' '}
      <select
        className="form-control"
        id="filter"
        onChange={handleFilterChange}
      >
        { categories.map((category) => <option key={category}>{category}</option>)}
      </select>
    </label>
  );
}

CategoryFilter.propTypes = {
  CHANGE_FILTER: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  booksInfo: state.filterReducer,
});

const mapDispatchToProps = (dispatch) => ({
  CHANGE_FILTER: (filter) => { dispatch(CHANGE_FILTER(filter)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
