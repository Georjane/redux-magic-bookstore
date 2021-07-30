const initialState = {
  books: [
    { id: Math.floor(Math.random() * 100), title: 'On Becoming', category: 'Literature' },
    { id: Math.floor(Math.random() * 100), title: 'Rich Dad, Poor Dad', category: 'Business' },
    { id: Math.floor(Math.random() * 100), title: 'Think Big', category: 'Motivation' },
  ],
  filter: 'All',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return { ...state, filter: action.payload };
    default:
      return { ...state, filter: 'All' };
  }
};
export default filterReducer;
