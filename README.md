# redux-domino
An intuitive way to handle async control flow with redux.  
You could easily write this yourself, but you don't have to.

## async example
`myHandlers.js`
```es6
let doSomeAsyncThing = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('async task complete!');
  }, 3000);
});

let rootHandler = async (action, store) => {
  let { dispatch } = store;

  switch (action.type) {
    case 'ASYNC_REQUEST':
      console.log('request initialized...');
      let result = await doSomeAsyncThing();
      dispatch({ type: 'ASYNC_SUCCESS', payload: result });
      break;
    case 'ASYNC_SUCCESS':
      console.log(action.payload);
      break;
    default:
      break;
  }
};

export default rootHandler;
```

`configureStore.js`
```es6
import createHandlerMiddleware from 'redux-domino';
import rootHandler from './myHandlers';

let handlerMiddleware = createHandlerMiddleware(rootHandler);

let configureStore = () => {
  return createStore(
    //...
    applyMiddleware(handlerMiddleware),
  );
};

export default configureStore();
```

## build
1. npm install
2. npm run build

## test
1. npm test

## timing

I think it might be possible to run into problems if a handler and a reducer operate on the same action type. You probably want to stay away from doing that until it's proven to be safe.
