import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "../features/PlayerSlice";

const store = configureStore({
    reducer: {
        player: playerReducer,
    },
});

export default store;