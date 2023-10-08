// 1. localStorage : 접속한 각 도메인 + 프로토콜에 대해서 각기 다른 Storage 객체를 리턴, 데이터가 만료되지 않음
// - https://a.com과 https://b.com은 다른 Storage 객체를 가짐
// - https://a.com과 https://a.com도 다른 Storage 객체를 가짐

// 키와 값의 쌍을 저장
localStorage.setItem("user_id", "soaple");
// 특정 키 값의 데이터 가져오기
const userId = localStorage.getItem("user_id");
// 특정 키 값의 데이터 삭제
localStorage.removeItem("user_id");
// 모든 데이터 삭제
localStorage.clear();

// localStorage Engine
import storage from "redux-persist/lib/storage";

// 2. sessionStorage : 접속한 각 도메인 + 프로토콜 + 세션에 대해서 각기 다른 Storage 객체를 리턴, 데이터가 세션 종료 시 만료됨
// - 같은 https://a.com을 여러 탭에서 접속할 경우, 각 탭이 다른 Storage 객체를 가짐

// 키와 값의 쌍을 저장
sessionStorage.setItem("user_id", "soaple");
// 특정 키 값의 데이터 가져오기
const userId2 = sessionStorage.getItem("user_id");
// 특정 키 값의 데이터 삭제
sessionStorage.removeItem("user_id");
// 모든 데이터 삭제
sessionStorage.clear();

// sessionStorage Engine
import storageSession from "redux-persist/lib/storage/session";
