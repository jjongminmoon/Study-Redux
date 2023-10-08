// Encrypt Transform 적용 예시 코드
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: storage,
  transforms: [encryptTransform]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export default store;
