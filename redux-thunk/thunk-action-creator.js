// fetchPostById는 "Thunk Action Creator"
export function fetchPostById(postId) {
  // fetchPostByIdThunk는 "Thunk Function"
  return async function fetchPostByIdThunk(dispatch, getState) {
    const response = await apiClient.get(`/api/post/${postId}`);
    dispatch(postLoaded(response.post));
  };
}

// Arrow Function을 사용한 Thunk Action Creator
const fetchPostById = (postId) => async (dispatch, getState) => {
  const response = await apiClient.get(`/api/post/${postId}`);
  dispatch(postLoaded(response.post));
};
