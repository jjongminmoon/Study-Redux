import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function Counter(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREASE_COUNT" })}>카운트 증가</button>
      <button onClick={() => dispatch({ type: "DECREASE_COUNT" })}>카운트 감소</button>
    </div>
  );
}

export default Counter;

// dispatch는 useEffect() 안에 사용 시 의존성 배열에 넣어주기
export function Counter2(props) {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "INT_COUNT", value: 0 });

    // 의존성 배열에 넣어주는 것이 안전
  }, [dispatch]);

  return <div>{count}</div>;
}

// mapDispatchToProps() 사용 예시
function mapDispatchToProps(dispatch) {
  return {
    increaseCount: () => {
      dispatch({ type: "INCREASE_COUNT" });
    },
    decreaseCount: () => {
      dispatch({ type: "DECREASE_COUNT" });
    }
  };
}
