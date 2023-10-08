// 1. configureStore() : Redux Store를 만들 때 사용하는 함수

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
// redux-thunk가 내장되어 있으며, redux-devtools가 자동으로 연동
const store = configureStore({ reducer: rootReducer });

// 2. createAction() : Action Types와 Action Creator를 만들어주는 함수

import { createAction } from "@reduxjs/toolkit";

const increase = createAction("counter/INCREASE");

console.log(increase()); // 출력 결과 : { type: "counter/INCREASE" }
console.log(increase(10)); // 출력 결과 : { type: "counter/INCREASE", payload: 10 }
console.log(increase.toString()); // 출력 결과 : "counter/INCREASE"
console.log(`Action Type: ${increase}`); // 출력 결과 : "Action Type: counter/INCREASE"
