// 1. createStore 함수를 사용해서 새로운 Redux store 생성
const store = Redux.createStore(couterReducer);

// 2. store가 UI 업데이트(re-rendering)를 구독 목록에 추가
store.subscribe(render);

// 3. UI 업데이트 과정
function render() {
  // 3-1. 현재 Redux store의 데이터(state)를 가져옴
  const state = store.getState();
  // 3-2. 가져온 데이터 중 UI에서 필요로 하는 데이터만 추출
  const newValue = state.value.toString();
  // 3-3. 추출한 데이터를 사용해서 UI 업데이트
  const myTextElement = document.getElementById("myText");
  myTextElement.innerHTML = newValue;
}

// 4. 초기 UI 렌더링
render();

// 5. UI 입력이 발생한 경우 action을 dispatch해서 UI 업데이트
document.getElementById("increment").addEventListener("click", function () {
  store.dispatch({ type: "my-app/counter/INCREASE" });
});
