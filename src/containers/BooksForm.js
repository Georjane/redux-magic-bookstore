function BooksForm() {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title:
        <input
          type="text"
          id="title"
        />
      </label>
      <br />
      <label htmlFor="category">
        Select your favourite category
        <select className="form-control" id="category">
          { categories.map((category) => <option key={category}>{category}</option>)}
        </select>
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default BooksForm;
