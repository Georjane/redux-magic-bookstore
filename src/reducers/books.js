const initialState = {
  books: [
    { id: Math.floor(Math.random() * 100), title: 'On Becoming', category: 'Learning' },
    { id: Math.floor(Math.random() * 100), title: 'Rich Dad, Poor Dad', category: 'Sci-Fi' },
    { id: Math.floor(Math.random() * 100), title: 'Think Big', category: 'History' },
  ],
  filter: 'All',
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      if (state.books === undefined) {
        return {
          ...state,
          books: [{
            id: action.payload.id,
            title: action.payload.title,
            category: action.payload.category,
          }],
        };
      }
      return {
        ...state,
        books: [...state.books, {
          id: action.payload.id,
          title: action.payload.title,
          category: action.payload.category,
        }],
      };

    case 'REMOVE_BOOK': {
      const newState = { ...state };
      newState.books.forEach((book) => {
        if (book.id === action.payload.id) {
          const index = newState.books.indexOf(book);
          if (index > -1) {
            newState.books.splice(index, 1);
          }
        }
      });
      return newState;
    }
    default:
      return state;
  }
};

export default bookReducer;
