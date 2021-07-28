// book object
const book = { id: 1, title: 'book1', category: 'films' };
const { id, title, category } = book;
console.log(id);
console.log(title);
console.log(category);

const initialState = [];
const state = initialState;
const bookk = 'jane';
const newState = [...state, [{ id, title, category }]];
const newState2 = [...newState, [{ id: 2, title: 'title222', category }]];

function count(id = 0) {
  const state = initialState;
  const newState = { ...state, book1: { id: id + 1, title, category } };
  const newState2 = { ...newState, book2: { id: id + 1, title, category } };
  console.log(newState2);
}

// console.log(state);
// console.log(newState);
// console.log(newState);
// console.log(newState2);
// delete newState2['book1']

console.log(newState2);
newState2.forEach((i) => {
  if (i[0].id == 2) {
    console.log(i[0].title);
    const index = newState2.indexOf(i);
    if (index > -1) {
      newState2.splice(index, 1);
    }
  }
});
// if (index > -1) {
//   array.splice(index, 1);
// }
console.log(newState2);
