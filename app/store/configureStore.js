
import { createStore, compose, applyMiddleware } from 'redux'
// import createLogger from 'redux-logger'
// import thunk from 'redux-thunk'
import rootReducer from '../reducers/reducers'


export default function configureStore(initialState) {
  // const enhancer = compose(
  //   applyMiddleware(thunk, createLogger())
  // );

  const store = createStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/reducers', () => {
      const nextRootReducer = require('../reducers/reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}