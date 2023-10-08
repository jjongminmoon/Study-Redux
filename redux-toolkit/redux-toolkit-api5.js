// 6. current() : Reducer 내에서 state를 변환하는 과정 중에 draftState의 현재 state 값을 가져올 때 사용하는 함수
import { createSlice, current } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increase: (state, action) => {
      state.count++;
      console.log(`현재 카운트: ${current(state.count)}`);
    },
    decrease: (state, aciont) => {
      state.count--;
      console.log(`현재 카운트: ${current(state.count)}`);
    }
  }
});

export const { increase, decrease } = counterSlice.actions;

export default counterSlice.reducer;
