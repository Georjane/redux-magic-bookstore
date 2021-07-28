import PropTypes from 'prop-types';

function Book({ book }) {
  // var row = this.props.row;
  const { id, title, category } = book;
  return (
    <tr>
      <td key={id}>{id}</td>
      <td key={title}>{title}</td>
      <td key={category}>{category}</td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
