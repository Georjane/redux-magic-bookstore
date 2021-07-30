const bookReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return {...state, 'books': [...state['books'], {
        id: action.payload.id,
        title: action.payload.title,
        category: action.payload.category,
      }]}
    case 'REMOVE_BOOK': {
      const newState = {...state};
      newState['books'].forEach((book) => {
        if (book.id === action.payload.id) {
          const index = newState['books'].indexOf(book);
          if (index > -1) {
            newState['books'].splice(index, 1);
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
