import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootSaga } from './saga';
import { rootReducer } from './reducer';

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);
sagaMiddleWare.run(rootSaga);
