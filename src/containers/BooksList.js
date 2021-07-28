import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

function BooksList(props) {
  const heading = ['BookID', 'title', 'category'];
  // const books = [{ id: 1, title: 'Book1', category: 'fiction' },
  //   { id: 2, title: 'Book2', category: 'fiction2' }];
  const { books } = props;
  return (
    <div>
      <h1>BooksLists</h1>
      <table style={{ width: 500 }}>
        <thead>
          <tr>
            {heading.map((head) => <th key={head}>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {books.map((book) => <Book book={book} key={book.id} />)}
        </tbody>
      </table>
    </div>
  );
}

BooksList.propTypes = {
  books: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
  // category: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  books: state,
});

export default connect(mapStateToProps)(BooksList);
