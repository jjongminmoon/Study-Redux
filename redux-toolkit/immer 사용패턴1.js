// 1. State 수정 또는 반환
import { createSlice, current } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    add: (state, action) => {
      // 기존 state의 값을 직접 수정
      state.push(action.payload);
    },
    remove: (state, action) => {
      const itemId = action.payload;
      // 기존 state로부터 새로운 state를 생성해서 리턴
      return state.filter((todo) => todo.id !== itemId);
    }
  }
});

// 2. State 교체 또는 초기화

const todoSlice2 = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    replace: (state, action) => {
      // 에러 : 값을 변경하거나 새로운 state를 리턴하지 않음
      state = action.payload;
      // 정상 : 새로운 state를 리턴하여 기존 state를 교체
      return action.payload;
    },
    reset: (state, action) => {
      // 정상 : 초기 state를 리턴하여 기존 state를 초기화
      return initialState;
    }
  }
});

// 3. 디버깅 및 Drafted State 검사
const todoSlice3 = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);

      // 에러 : Proxy instance가 출력
      console.log(state);

      // 정상 : 현재 시점의 state 값이 출력
      console.log(current(state));
    }
  }
});
