const initialState = {
  books: [
    { id: 300, title: 'On Becoming', category: 'Literature' },
    { id: 200, title: 'Rich Dad, Poor Dad', category: 'Business' },
    { id: 50, title: 'Think Big', category: 'Motivation' },
  ],
  filter: 'All',
};
// const { filter } = initialState
// const bookks = initialState['books']
const newInt = {...initialState, filter: 'new filter'}
console.log(newInt);

const state = { ...initialState };
const state1 = { ...initialState, books: [...initialState.books, { id: 1, title: 'jane', category: 'smart' }] };
state1.books.forEach((book) => {
  if (book.id === 50) {
    const index = state1.books.indexOf(book);
    if (index > -1) {
      state1.books.splice(index, 1);
    }
  }
});

// console.log(state);
// console.log(state1);
