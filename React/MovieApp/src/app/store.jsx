import { configureStore } from "@reduxjs/toolkit";
import { setListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
  },
    middleware: (getDefaultMiddleware) =>{
        getDefaultMiddleware().concat()
    }
});

setListeners(store.dispatch);