const COUNT_TO_TEN = 'COUNT_TO_TEN';

let countToTen = (action, store) => {
  let { dispatch } = store;
  let number = action.payload;
  console.log(number);

  if (number < 10) {
    number++;
    dispatch({ type: COUNT_TO_TEN, payload: number });
  }
};

let addHandler = (action, store) => {
  switch(action.type) {
    case COUNT_TO_TEN:
      countToTen(action, store);
      break;
  }
};
