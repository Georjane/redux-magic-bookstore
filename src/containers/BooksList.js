import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

function BooksList(props) {
  const heading = ['BookID', 'Title', 'Category'];
  const { books } = props;
  return (
    <div className="booklist">
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
};

const mapStateToProps = (state) => ({
  books: state,
});

export default connect(mapStateToProps)(BooksList);
