const apiMiddleware = (store) => (next) => (action) => {
  if (!action.meta || action.meta.type !== 'api') {
    return next(action);
  }
  // This is an api request
  const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log('This is your data', data.categories);
      const foods = [];
      data.categories.forEach((cat) => {
        foods.push(cat.strCategory);
      });
      const newAction = { ...action, payload: foods };
      delete newAction.meta;
      store.dispatch(newAction);
    });
};

export default apiMiddleware;
