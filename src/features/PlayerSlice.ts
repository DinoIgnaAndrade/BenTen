import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import type {MediaData}  from "@/types/Types";

const initialState: MediaData = {
    title: 'No title',
    artist: 'No artist',
    album: 'No album',
    genre: 'No genre',
    picture: null,
    uri: '',
    duration: 0
}

const trackImporter : MediaData[] = [];

export const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        setAttributes: (state, action: PayloadAction<MediaData>) => {
            const { title, artist, album, genre, picture, uri, duration } = action.payload;
            state.title = title;
            state.artist = artist;
            state.album = album;
            state.genre = genre;
            state.picture = picture;
            state.uri = uri;
            state.duration = duration;
        },
    }
});

export const {
    setAttributes,
  } = playerSlice.actions;

export default playerSlice.reducer;