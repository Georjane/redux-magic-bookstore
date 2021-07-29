import PropTypes from 'prop-types';

function Book({ book }) {
  const { id, title, category } = book;
  return (
    <tr>
      <td key={id}>{id}</td>
      <td key={title}>{title}</td>
      <td key={category}>{category}</td>
      <td key="delete"><button type="button">Remove</button></td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
};

Book.defaultProps = {
  id: 0,
  title: '',
  category: '',
};

export default Book;
