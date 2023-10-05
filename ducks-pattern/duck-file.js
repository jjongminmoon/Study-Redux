// Actions (Action Types)
const SET_COUNT = "my-app/counter/SET_COUNT";
const INCREASE_COUNT = "my-app/counter/INCREASE_COUNT";
const DECREASE_COUNT = "my-app/counter/DECREASE_COUNT";

// Reducer
export default function reducer(state = 0, action = {}) {
  switch (action.type) {
    case SET_COUNT:
      return action.count;
    case INCREASE_COUNT:
      return state + 1;
    case DECREASE_COUNT:
      return state - 1;
    default:
      return state;
  }
}

// Action Creator
export function setCount(count) {
  return { type: SET_COUNT, count: count };
}

export function increaseCounter() {
  return { type: INCREASE_COUNT };
}

export function decreaseCount() {
  return { type: DECREASE_COUNT };
}

// 필요한 경우 Side Effects 작성
export function getCount() {
  return (dispatch) => get("/count").then((count) => dispatch(setCount(count)));
}
