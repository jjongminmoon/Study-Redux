// 다른 Action 또는 Thunk를 Dispatch
// Action들을 순서대로 Dispatch 해야하는 경우에 사용
function complexSynchronousThunk(someValue) {
  return (dispatch, getState) => {
    dispatch(otherActionCreator(someValue));
    dispatch(otherThunkActionCreator());
  };
}
