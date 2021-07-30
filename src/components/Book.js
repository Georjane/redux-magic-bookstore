import PropTypes from 'prop-types';

function Book(props) {
  const { book, handleRemoveBook } = props;
  const { id, title, category } = book;
  return (
    <tr>
      <td className="eachbook">
        <div className="div1">
          <h6 className="category">{category}</h6>
          <h2 className="title">{title}</h2>
          <h2 className="author">Author Name</h2>
          <div className="removebtn">
            <button type="button">Comments</button>
            <button type="button" data-param={id} onClick={handleRemoveBook}>Remove</button>
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="div2">
          <i />
          <span>
            <p>100%</p>
            <span>Completed</span>
          </span>
        </div>
        <div className="div3">
          <p>CURRENT CHAPTER</p>
          <p>Chapter 17</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </td>
      {/* <td key={id}>{id}</td>
      <td key={title}>{title}</td>
      <td key={category}>{category}</td> */}
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
