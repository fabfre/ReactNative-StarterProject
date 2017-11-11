import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import persistConfig from './persistConfig';
import rootReducer from './rootReducer';

export function configureStore() {
  const persistRootReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistRootReducer);
  const persistor = persistStore(store);
  global.reduxStore = store;

  return {persistor, store};
}

export function getStore() {
  if (!global.reduxStore) {
    const {store} = configureStore();
    global.reduxStore = store;
  }
  return global.reduxStore;
}
