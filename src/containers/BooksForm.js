import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CREATE_BOOK } from '../actions/index';
// import { REMOVE_BOOK } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
      categories: ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'],
    };
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleCategoryChange = (e) => {
    this.setState({ category: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, category } = this.state;
    const { CREATE_BOOK } = this.props;
    const book = { id: Math.floor(Math.random() * 100), title, category };
    CREATE_BOOK(book);
    this.setState({ title: '', category: 'Action' });
  };

  render() {
    const { title, category, categories } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="bookform">
        <h2>Add A Book</h2>
        <label htmlFor="title">
          Book Title:
          <br />
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleTitleChange}
          />
        </label>
        <br />
        <label htmlFor="category">
          Select Book category
          <br />
          <select
            className="form-control"
            id="category"
            value={category}
            onChange={this.handleCategoryChange}
          >
            { categories.map((category) => <option key={category}>{category}</option>)}
          </select>
        </label>
        <br />
        <br />
        <br />
        <input type="submit" value="Add a Book" />
      </form>
    );
  }
}

BooksForm.propTypes = {
  CREATE_BOOK: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state,
});

const mapDispatchToProps = (dispatch) => ({
  CREATE_BOOK: (book) => { dispatch(CREATE_BOOK(book)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
