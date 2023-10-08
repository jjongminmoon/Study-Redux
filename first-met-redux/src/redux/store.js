// import { createStore, applyMiddleware, compose } from "redux";
// import asyncFunctionMiddleware from "./middlewares/asyncFunctionMiddleware";
// import storage from "redux-persist/lib/storage";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import {
  persistStore,
  persistReducer,
  createMigrate,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";

const migrations = {
  1: (state) => {
    return {
      ...state,
      fetchTodos: {
        ...state.fetchTodos,
        extraData: undefined
      }
    };
  },
  2: (state) => {
    return {
      ...state,
      fetchTodos: {
        ...state.fetchTodos,
        extraData: null
      }
    };
  }
};

const persistConfig = {
  key: "root",
  // storage: storage
  storage: sessionStorage,
  version: 2,
  migrage: createMigrate(migrations, { debug: false })
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const compostEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//  persistedReducer,
//  compostEnhancers(applyMiddleware(thunkMiddleware, sagaMiddleware))
// );

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    });
    return [...defaultMiddleware, sagaMiddleware];
  }
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
