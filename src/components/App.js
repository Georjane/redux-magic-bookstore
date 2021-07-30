import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

function App() {
  return (
    <div className="root">
      <nav>
        <div className="logo">
          <h1>Bookstore CMS</h1>
          <h3>BOOKS</h3>
          <h4>CATEGORIES</h4>
        </div>
        <div>
          <i className="fa fa-user" />
        </div>
      </nav>
      <main>
        <BooksList />
        <hr />
        <BooksForm />
      </main>
    </div>
  );
}

export default App;
