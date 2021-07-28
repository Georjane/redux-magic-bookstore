import Book from '../components/Book';

function BooksList() {
  const heading = ['BookID', 'title', 'category'];
  const books = [{ id: 1, title: 'Book1', category: 'fiction' },
    { id: 2, title: 'Book2', category: 'fiction2' }];
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

export default BooksList;
