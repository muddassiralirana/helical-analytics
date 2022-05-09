import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import { persistStore } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [sagaMiddleware, thunk];

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default { store, persistor };
