import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
// import { CHANGE_FILTER } from '../actions/index';

function BooksList(props) {
  const heading = ['BookID', 'Title', 'Category', 'Delete Book'];
  const { booksInfo, filterInfo } = props;
  console.log(filterInfo);
  const { books } = booksInfo;
  const { filter } = filterInfo;
  console.log(filter);
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
  return (
    <div className="booklist">
      <h1>BooksLists</h1>
      {/* <CategoryFilter filter={filter} CHANGE_FILTER={CHANGE_FILTER} /> */}
      <CategoryFilter />
      <table style={{ width: 500 }}>
        <thead>
          <tr>
            {heading.map((head) => <th key={head}>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
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
  // books: PropTypes.arrayOf(PropTypes.any),
};

BooksList.defaultProps = {
  // books: [],
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
