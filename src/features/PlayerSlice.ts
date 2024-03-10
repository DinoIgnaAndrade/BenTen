import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
    name: "player",
    initialState: {
        uri: "",
        artist: "",
        album:"",
        name: "",
        duration: 0,
    },
    reducers: {
        setAttributes: (state, action) => {
            const { uri, artist, album, name, duration } = action.payload;
            state.uri = uri || state.uri;
            state.artist = artist || state.artist;
            state.album = album || state.album;
            state.name = name || state.name;
            state.duration = duration || state.duration;
        },
    },
});

export const {
    setAttributes
  } = playerSlice.actions;

export default playerSlice.reducer;