function BooksForm() {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="bookform">
      <h2>Add A Book</h2>
      <label htmlFor="title">
        Book Title:
        <br />
        <input
          type="text"
          id="title"
        />
      </label>
      <br />
      <label htmlFor="category">
        Select Book category
        <br />
        <select className="form-control" id="category">
          { categories.map((category) => <option key={category}>{category}</option>)}
        </select>
      </label>
      <br />
      <br />
      <br />
      <input type="submit" value="Add a Book" />
    </form>
  );
}

export default BooksForm;
