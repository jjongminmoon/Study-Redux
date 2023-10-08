// 3. createReducer() : reducer를 만들어주는 함수
import { createAction, createReducer } from "@reduxjs/toolkit";

const increase2 = createAction("counter/INCREASE");
const decrease2 = createAction("counter/DECREASE");

const initialState = { count: 0 };

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increase, (state, action) => {
      state.count++;
    })
    .addCase(decrease, (state, action) => {
      state.count--;
    });
});

// immer를 사용한 Immutable Update
import produce from "immer";

const baseState = [
  { todo: "처음 만난 리덕스", done: true },
  { todo: "처음 만난 리덕스", done: false }
];

const nextState = produce(baseState, (draftState) => {
  // draftState 배열을 직접 수정 (mutate)
  draftState.push({ todo: "운동하기", done: false });
  // draftState 배열의 아이템의 값을 직접 수정 (mutate)
  draftState[1].done = true;
});

console.log(baseState === nextState); // 출력 결과 : false (배열이 복사되었기 때문)
console.log(baseState[0] === nextState); // 출력 결과 : true (첫 번째 아이템은 바뀌지 않았기 때문에 같은 reference 유지)
console.log(baseState[1] === nextState[1]); // 출력 결과 : false (두 번째 아이템은 복사된 이후 변경되었기 때문)
