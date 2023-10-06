import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
// import asyncFunctionMiddleware from "./middlewares/asyncFunctionMiddleware";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const compostEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compostEnhancers(applyMiddleware(thunkMiddleware, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
