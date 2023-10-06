import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../first-met-redux/src/redux/reducers";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
