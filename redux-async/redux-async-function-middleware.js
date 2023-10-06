import rootReducer from "../first-met-redux/src/redux/reducers";

const middlewareEnhancer = applyMiddleware(asyncFunctionMiddleware);
const store = createStore(rootReducer, middlewareEnhancer);

// "dispatch"와 "getState"를 파라미터로 가지는 함수 작성
const fetchPosts = (dispatch, getState) => {
  // 비동기 HTTP 요청
  apiClient.get("post").then((posts) => {
    // 서버에서 받은 posts 데이터와 함께 action을 dispatch
    dispatch({ type: "my-app/post/LOADED", payload: posts });
    // dispatch 이후 업데이트 된 store에서 데이터 확인
    const allPosts = getState().posts;
    console.log("로딩 이후 총 posts 개수:", allPosts.length);
  });
};

// 작성한 fetchPosts 함수(action)를 dispatch
store.dispatch(fetchPosts);

// 로그 출력 예시 :
// 로딩 이후 총 posts 개수 : 10
