import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CHANGE_FILTER } from '../actions/index';

function CategoryFilter(props) {
  const { CHANGE_FILTER } = props;
  let newFilter;
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi', 'All'];

  // handleTitleChange = (e) => {
  //   this.setState({ title: e.target.value });
  // }

  const handleFilterChange = (e) => {
    newFilter = e.target.value;
    CHANGE_FILTER(newFilter);
    console.log(newFilter);
  };

  const handleSubmit = (e) => {
    console.log(newFilter);
    e.preventDefault();
    // const { title, category } = this.state;
    // const { CREATE_BOOK } = this.props;
    // const book = { id: Math.floor(Math.random() * 100), title, category };
    CHANGE_FILTER(newFilter);
    // this.setState({ title: '', category: 'Action' });
  };

  return (
    <form onSubmit={handleSubmit} className="filter">

      <label htmlFor="filter">
        Select Filter:
        {' '}
        <select
          className="form-control"
          id="filter"
          onChange={handleFilterChange}
        >
          { categories.map((category) => <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" />
    </form>
  );
}

CategoryFilter.propTypes = {
  CHANGE_FILTER: PropTypes.func.isRequired,
  // filter: PropTypes.string.isRequired,
  // booksInfo: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  booksInfo: state.filterReducer,
});

const mapDispatchToProps = (dispatch) => ({
  CHANGE_FILTER: (filter) => { dispatch(CHANGE_FILTER(filter)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
