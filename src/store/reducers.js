import { combineReducers } from "redux";

// Front
import Layout from "./layout/reducer";

// Authentication Module
import Account from "./auth/register/reducer";
import Login from "./auth/login/reducer";
import Forget from "./auth/forgetpwd/reducer";
import storage from "redux-persist/lib/storage";
//Folder Reducer
import Folder from "./folder/reducer";
import Study from "./study/reducer";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Folder", "Study"],
};

const rootReducer = combineReducers({
  // public
  Layout,
  Folder,
  Study,

  // Authentication
  Account,
  Login,
  Forget,
});

export default persistReducer(persistConfig, rootReducer);
