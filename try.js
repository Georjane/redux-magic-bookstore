const initialState = {
  books: [
    { id: Math.floor(Math.random() * 100), title: 'On Becoming', category: 'Literature' },
    { id: Math.floor(Math.random() * 100), title: 'Rich Dad, Poor Dad', category: 'Business' },
    { id: Math.floor(Math.random() * 100), title: 'Think Big', category: 'Motivation' },
  ],
  filter: 'All',
};
// let filt =

function filterByCategory(book) {
  return book.category == 'Business';
}
console.log(initialState.books.filter(filterByCategory));
