import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import crudReducer from "./slices/crudSlice";
//configureStore - createStore farklari;
// 1. Varsayilan olarak 'thunk' kurulu gelir.
//2. Verilen reducer'lari otomatik olarak birlestirir.
// 3. 'devTools' kurulu gelir.

export default configureStore({
  reducer: { counterReducer, crudReducer },
});
