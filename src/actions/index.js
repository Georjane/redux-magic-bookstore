export const CREATE_BOOK = (book) => ({
  type: 'CREATE_BOOK',
  payload: book,
});

export const REMOVE_BOOK = (book) => ({
  type: 'REMOVE_BOOK',
  payload: book,
});

export const CHANGE_FILTER = (filter) => ({
  type: 'CHANGE_FILTER',
  payload: filter,
});

export const LIST_FOOD = (foods) => ({
  type: 'LIST_FOOD',
  payload: foods,
  meta: {
    type: 'api',
    url: 'www.themealdb.com/api/json/v1/1/categories.php',
  },
});
