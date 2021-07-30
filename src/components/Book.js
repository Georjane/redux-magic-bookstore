import PropTypes from 'prop-types';

function Book(props) {
  const { book, handleRemoveBook } = props;
  const { id, title, category } = book;
  return (
    <tr>
      <td key={id}>{id}</td>
      <td key={title}>{title}</td>
      <td key={category}>{category}</td>
      <td key="delete"><button type="button" data-param={id} onClick={handleRemoveBook}>Remove</button></td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
  handleRemoveBook: PropTypes.func,
};

Book.defaultProps = {
  id: 0,
  title: '',
  category: '',
  handleRemoveBook: () => '',
};

export default Book;
