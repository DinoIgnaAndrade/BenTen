import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

//Slices
import playerReducer from "../features/PlayerSlice";
import trackReducer from "../features/TracksSlice"

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
    reducer: {
        player: playerReducer,
        trackList: trackReducer
    },
});


setupListeners(store.dispatch);
export default store;