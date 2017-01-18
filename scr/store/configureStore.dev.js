import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import { firebase as fbConfig } from '../config'
import { reactReduxFirebase } from 'react-redux-firebase' // >= v0.1.1

export default function configureStore (initialState, history) {
  const createStoreWithMiddleware = compose(
    reactReduxFirebase(fbConfig,
      {
        userProfile: 'users',
        enableLogging: false
      }
    ),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )(createStore)
  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
