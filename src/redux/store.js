import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducer';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['language', 'login']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
if (process.env.REACT_APP_IS_REDUX_LOGGER_ACTIVE === 'active') {
  middlewares.push(logger);
}

let store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);
let persistor = persistStore(store);

store.rootTask = sagaMiddleware.run(saga, store);

export {
  store,
  persistor
};
