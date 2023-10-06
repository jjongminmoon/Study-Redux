// Async Request 수행 순서
// 1. Async Request를 보내기 전에 Action Dispatch : 서버로 요청을 보냈고 응답을 기다린는 중이라는 것을 state에 업데이트 (ex. fetchDataRequested)
// 2. Async Request를 성공한 경우 Action Dispatch : 서버로부터 성공 응답을 받았다는 것과 함께 받은 데이터를 state에 업데이트 (ex. fetchDataSucceeded)
// 3. Async Request를 실패한 경우 Action Dispatch : 서버로부터 실패 응답을 받았다는 것과 함께 받은 에러를 state에 업데이터 (ex. fetchDataFailed)

// Promise 사용
function fetchData() {
  return (dispatch, getState) => {
    dispatch(fetchDataRequested());

    apiClient.get("/api/data").then(
      (response) => {
        dispatch(fetchDataSucceeded(response.data));
      },
      (error) => {
        dispatch(fetchDataFailed(error.message));
      }
    );
  };
}

// async, await 사용
function fetchData2() {
  return async (dispatch, getState) => {
    dispatch(fetchDataRequested());

    let response;

    try {
      response = await apiClient.get("/api/data");
    } catch (error) {
      dispatch(fetchDataFailed(error.message));
      return;
    }

    dispatch(fetchDataSucceeded(response.data));
  };
}
