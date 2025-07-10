import { configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "../feautures/counter/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterSlice
  }
})

export default store;