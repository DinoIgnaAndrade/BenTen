import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import playerReducer from "../features/PlayerSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
    reducer: {
        player: playerReducer,
    },
});


setupListeners(store.dispatch);
export default store;