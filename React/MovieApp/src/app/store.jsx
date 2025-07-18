import { configureStore } from "@reduxjs/toolkit";
// import { setListeners } from "@reduxjs/toolkit/query";
import { movieApi } from "../api/movieApi";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
  },
    middleware: (getDefaultMiddleware) =>(
        getDefaultMiddleware().concat(movieApi.middleware)
    )
});

// setListeners(store.dispatch);