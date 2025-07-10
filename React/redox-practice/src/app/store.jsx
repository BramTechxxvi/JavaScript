import { configureStore } from "@reduxjs/toolkit"
import CounterReducer from "../feautures/counter/counterSlice"

export const store = configureStore({
  reducer: {
    counter: CounterReducer
  }
})

export default store;