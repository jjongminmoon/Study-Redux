// - 무조건 "hello"를 반환하는 middleware
const returnHelloMiddleware = (next) => (action) => {
  // originalReturnValue는 action 객체를 담고 있음
  const originalReturnValue = next(action);

  return "Hello";
};

const returnValue = dispatch(anyAction());
console.log(returnValue); // "Hello가 출력"

// - Promise를 반환하는 Thunk를 사용
const onWritePostClicked = async () => {
  await dispatch(writePost(content));
  setContent("");
};
