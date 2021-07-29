const bookReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, {
        id: action.payload.id,
        title: action.payload.title,
        category: action.payload.category,
      }];
    case 'REMOVE_BOOK': {
      const newState = [...state];
      newState.forEach((i) => {
        if (i[0].id === action.payload.id) {
          const index = newState.indexOf(i);
          if (index > -1) {
            newState.splice(index, 1);
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
