// 4. 중첩된 데이터 업데이트 1
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    toggleDone: (state, action) => {
      const itemId = action.payload;
      const todo = state.find((todo) => todo.id === itemId);

      if (todo) {
        // 에러 : Immer는 primitive value의 업데이트를 트래킹 할 수 없음
        let { done } = todo;
        done = !done;

        // 정상 : todo 객체가 Proxy로 감싸져 있기 때문에 수정할 수 있음
        todo.done = !todo.done;
      }
    }
  }
});

// 5. 중첩된 데이터 업데이트 2
const todoSlice2 = createSlice({
  name: "todo",
  initialState: { home: [], work: [] },
  reducers: {
    add: (state, action) => {
      const { category, item } = action.payload;

      // 에러 : category에 해당하는 배열이 존재하지 않을 경우 오류 발생
      state[category].push(item);

      // 정상 : category에 해당하는 배열이 존재하는지 먼저 확인한 후 이후에 아이템 추가
      if (!state[category]) {
        state[category] = [];
      }
      state[category].push(item);
    }
  }
});
