// 1. Storage Engine 선택 : localStorage Engine / sessionStorage Engine

// 2. persistConfig : redux-persist를 어떻게 사용할 것인지 설정 세팅
// - key : 저장할 데이터의 key
// - storage : 사용할 Storage Engine
// - version : 현재 저장된 State의 버전 (Migration에 사용)
// - blacklist & whitelist : 저장에서 제외(blacklist)하거나, 저정할 타겟(whitelist) State의 key값
// - transforms : 사용할 데이터 변환 프러그인

// Persistor : Persisted Redux Store와 관련된 여러 함수들을 제공하는 객체
// - purge() : 데이터를 모두 초기화 하는 함수
// - flush() : 즉시 모든 state의 데이터를 저정하는 함수
// - pause() : 데이터 저장(persist)을 일시 중단하는 함수
// - persist() : 데이터 저장(persist)을 다시 재개하는 함수
