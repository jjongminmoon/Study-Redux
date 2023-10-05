function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCount: () => {
      dispatch({ type: "INCREASE_COUNT" });
    },
    decreaseCount: () => {
      dispatch({ type: "DECREASE COUNT" });
    }
  };
}

// 1. 어떤 리액트 컴포넌트든지 파라미터로 넣어서 호출하면 Redux에 연결시킬 수 있는 Wrapper Function을 리턴
const connectCount = connect(mapStateToProps, mapDispatchToProps);

// 2. Redux와 연결(connect)된 Container 컴포넌트를 리턴
const CounterContainer = connectCount(Counter);

// 3. 1번과 2번을 한 번에 처리하는 방식
const CounterContainer2 = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;
