const createActionHandlerMiddleware = (rootHandler) => (store) => (next) => (action) => {
  rootHandler(action, store);
  next(action);
};

export default createActionHandlerMiddleware;
