// - state의 값에 따른 Action Dispatch
const MAX_ITEM_COUNT = 10;

function addItemIfPossible(newItem) {
  return (dispatch, getState) => {
    const state = getState();

    if (state.items.length < MAX_ITEM_COUNT) {
      dispatch(addItem(newItem));
    }
  };
}

// - Action Dispatch 이후 state에 접근
function checkStateAfterDispatch() {
  return (dispatch, getState) => {
    const beforeDispatchState = getState();
    dispatch(firstAction());

    const afterDispatchState = getState();
    if (afterDispatchState.someField != beforeDispatchState.someField) {
      dispatch(secondAction());
    }
  };
}

// - cross-slice state 문제 해결
function crossSliceActionThunk() {
  return (dispatch, getState) => {
    const state = getState();
    // Root state로부터 각 slice의 state를 가져옴
    const { stateOfSliceA, stateOfSliceB } = state;

    // 두 slice의 state를 사용하여 Action Dispatch
    dispatch(crossSliceAction(stateOfSliceA, stateOfSliceB));
  };
}
