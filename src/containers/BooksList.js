import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

function BooksList(props) {
  // const heading = ['BookID', 'Title', 'Category', 'Delete Book'];
  const { booksInfo, filterInfo } = props;
  const { books } = booksInfo;
  const { filter } = filterInfo;

  const handleFilterChange = (newFilter) => {
    const { CHANGE_FILTER } = props;
    CHANGE_FILTER(newFilter);
  };

  const handleRemoveBook = (e) => {
    const { param } = e.target.dataset;
    let deletebook;
    books.forEach((book) => {
      if (parseInt(book.id, 10) === parseInt(param, 10)) {
        deletebook = book;
      }
    });
    const { REMOVE_BOOK } = props;
    REMOVE_BOOK(deletebook);
  };

  function filterByCategory(book) {
    if (filter === 'All') {
      return book;
    }
    return book.category === filter;
  }
  const filteredBooks = books.filter(filterByCategory);

  return (
    <div className="booklist">
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <table>
        {/* <thead>
          <tr>
            {heading.map((head) => <th key={head}>{head}</th>)}
          </tr>
        </thead> */}
        <tbody>
          {filteredBooks.map((book) => (
            <Book
              book={book}
              key={book.id}
              handleRemoveBook={handleRemoveBook}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

BooksList.propTypes = {
  booksInfo: PropTypes.objectOf(PropTypes.any).isRequired,
  filterInfo: PropTypes.objectOf(PropTypes.any).isRequired,
  REMOVE_BOOK: PropTypes.func.isRequired,
  CHANGE_FILTER: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  booksInfo: state.bookReducer,
  filterInfo: state.filterReducer,
});

const mapDispatchToProps = (dispatch) => ({
  REMOVE_BOOK: (book) => { dispatch(REMOVE_BOOK(book)); },
  CHANGE_FILTER: (filter) => { dispatch(CHANGE_FILTER(filter)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
