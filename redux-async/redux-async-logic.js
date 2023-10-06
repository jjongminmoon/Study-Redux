import apiClient from "../api/client";

const delayedActionMiddleware = (store) => (next) => (action) => {
  if (action.type === "my-app/post/ADDED") {
    setTimeout(() => {
      // 1000ms(1초) 뒤에 action이 처리되도록 함
      next(action);
    }, 1000);
    return;
  }

  return next(action);
};

const fetchPostsMiddleware = (store) => (next) => (action) => {
  if (action.type === "my-app/post/FETCH") {
    // API를 호출하여 서버로부터 데이터를 받아옴
    apiClient.get("post").then((posts) => {
      // 서버에서 받은 데이터와 함께 action을 dispatch
      store.dispatch({ type: "my-app/post/LOADED", payload: posts });
    });
  }

  return next(action);
};
