// Slice : Redux 구성 요소들의 조각 (Action Types, Actoin Creators, Reducers 등)

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increase: (state, action) => {
      state.count++;
    },
    decrease: (state, action) => {
      state.count--;
    }
  }
});

export const { increase, decrease } = counterSlice.actions;

export default counterSlice.reducer;

/*
counterSlice 객체
{
  name: "counter",
  actions: {
    increase,
    decrease
  },
  reducer
}
*/
