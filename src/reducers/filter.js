const filterReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return {...state, filter: action.payload};
    default:
      return {...state, filter: 'All'};
  }
};
export default filterReducer;
