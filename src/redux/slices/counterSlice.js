/*
- hem reducer'i 
-hem reducer'in aksiyonlarini 
-createSlice methpdu ile tek seferde tanimliyacagiz.

? slice olusturma
*import {createSlice}

- - name: slice ismi > string
- - initialState: baslangic state'i
- - reducers: aksiyonlarin gorevini tanimladigimiz fonksiyonlari ifade eder.
*/

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, isDarkTheme: true },
  reducers: {
    increase: (state) => {
      state.count++;
      state.isDarkTheme = false;
    },
    decrease: (state) => {
      state.count--;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export default counterSlice.reducer;

export const { increase, decrease, setCount, toggleTheme } =
  counterSlice.actions;
