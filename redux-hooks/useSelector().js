const partialState = useSelector(selectorFunction, equalityFunction);
// selectorFunction은 rootState를 파라미터로 받아서 추출하길 원하는 state만을 선택하는 함수 (pure 함수여야만 함)
// equalityFunction?은 선택한 state가 동일한지 변경되었는지 여부를 리턴하는 함수 => 변겨되었다고 리턴하게 될 시 컴포넌트 리렌더링

import { useSelector } from "react-redux";

// 예시 1
function Counter(props) {
  const count = useSelector((state) => state.count);

  return <div>{`현재 카운트 : ${count}`}</div>;
}

export default Counter;

// 예시 2 : props 사용
export function Post(props) {
  const post = useSelector((state) => state.posts[props.postId]);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

// 예시 3 : mapStateToProps()에서 ownProps를 함께 사용한 예시
function mapStateToProps(state, ownProps) {
  const { posts, comments } = state;

  const targetPost = posts.find((post) => {
    return post.id === ownProps.postId;
  });

  return {
    post: targetPost
  };
}
