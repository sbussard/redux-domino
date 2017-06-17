// simple case: log everything
let logHandler = (action, store) => {
  console.log('action', action);
  console.log('state', store.getState());
};
