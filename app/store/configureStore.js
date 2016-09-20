
import { createStore, compose, applyMiddleware } from 'redux'
// import createLogger from 'redux-logger'
// import thunk from 'redux-thunk'
// import devTools from 'remote-redux-devtools';
import rootReducer from '../reducers/reducers'


export default function configureStore(initialState) {
  const enhancer = compose(
    global.reduxNativeDevTools ? global.reduxNativeDevTools(/*options*/) : nope => nope,
  );

  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/reducers', () => {
      const nextRootReducer = require('../reducers/reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}