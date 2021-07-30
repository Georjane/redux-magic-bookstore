import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

function App() {
  return (
    <div className="root">
      <main>
        <BooksList />
        <hr />
        <BooksForm />
      </main>
    </div>
  );
}

export default App;
