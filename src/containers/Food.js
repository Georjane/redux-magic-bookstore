import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Book from '../components/Book';
import { REMOVE_BOOK, CHANGE_FILTER, LIST_FOOD } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

function Food(props) {
  const { booksInfo } = props;
  // const { books } = booksInfo;
  const { foods } = booksInfo;
  // const { filter } = filterInfo;
  const handleFilterChange = (newFilter) => {
    const { CHANGE_FILTER } = props;
    CHANGE_FILTER(newFilter);
    const { LIST_FOOD } = props;
    LIST_FOOD(['eru', 'ekwang', 'ndole']);
  };

  // const handleRemoveBook = (e) => {
  //   const { param } = e.target.dataset;
  //   let deletebook;
  //   books.forEach((book) => {
  //     if (parseInt(book.id, 10) === parseInt(param, 10)) {
  //       deletebook = book;
  //     }
  //   });
  //   const { REMOVE_BOOK } = props;
  //   REMOVE_BOOK(deletebook);
  // };

  // function filterByCategory(book) {
  //   if (filter === 'All' || filter === 'CATEGORIES') {
  //     return book;
  //   }
  //   return book.category === filter;
  // }
  // const filteredBooks = books.filter(filterByCategory);

  return (
    <div className="booklist">
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <table>
        <tbody>
          {foods.map((food) => (
            <tr key={food}>
              {food}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Food.propTypes = {
  booksInfo: PropTypes.objectOf(PropTypes.any).isRequired,
  // filterInfo: PropTypes.objectOf(PropTypes.any).isRequired,
  // REMOVE_BOOK: PropTypes.func.isRequired,
  CHANGE_FILTER: PropTypes.func.isRequired,
  LIST_FOOD: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  booksInfo: state.bookReducer,
  filterInfo: state.filterReducer,
});

const mapDispatchToProps = (dispatch) => ({
  REMOVE_BOOK: (book) => { dispatch(REMOVE_BOOK(book)); },
  CHANGE_FILTER: (filter) => { dispatch(CHANGE_FILTER(filter)); },
  LIST_FOOD: (foods) => { dispatch(LIST_FOOD(foods)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Food);
