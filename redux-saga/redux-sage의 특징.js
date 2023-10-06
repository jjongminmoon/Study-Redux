// 1. Declarative Effects
// - take(pattern) : Effect를 생성
// - takeEvery(pattern, saga, ...args) : Redux Store에 Dispatch된 Action 중, pattern과 일치하는 Action에 대해 saga를 생성
// - takeLatest(pattern, saga, ...args) : takeEvery()와 동일하지만, 이전에 시작된 이전 saga가 실행 중인 경우 자동으로 취소
// - takeLeading(pattern, saga, ...args) : takeEvery()와 동일하지만, 생성된 saga가 완료될 때까지 새로운 saga 생성을 차단
// - put(action) : Action 객체를 파라미터로 받아서 Effect를 생성하고 saga에 집어넣는 함수, 다른 Action이 실행중일 수 있기 때문에 곧바로 실행되지 않을 수 있음
// - call(fn, ...args) : 첫 번째 파라미터인 함수(fn)를 호출을 하는 Effect를 생성, 두 번째부터 나오는 복수개의 파라미터들을 넣어서 호출함
// - select(selector, ...args) : Redux Store에서 selector에 해당하는 State를 선택하는 Effect를 생성

import { takeLeading } from "redux-sage/effects";
import apiClient from "../api/client";

function* fetchPosts() {
  const posts = yield apiClient.fetch("/api/posts");
}

export function* fetchPostsSaga() {
  yield takeLeading("FETCH_POSTS_REQUESTED", fetchPosts);
}

// 2. Dispatching Actions : Action을 Dispatch하기 위해 put() 함수를 사용

import { call } from "redux-sage/effects";

function* fetchPosts2() {
  const posts = yield call(apiClient.fetch, "/api/posts");

  // Actiond을 Dispatch하기 위한 Effect를 생성하고 yield
  yield put({
    type: "FETCH_POSTS_SUCCEEDED",
    payload: {
      posts
    }
  });
}
