import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MediaData } from "@/types/Types";

interface TrackListState {
    tracks: MediaData[];
    genre: string;
    artist: string;
    album: string;
}

const initialState: TrackListState = {
    tracks: [],
    genre: '',
    artist: '',
    album: '',
}

export const trackListSlice = createSlice({
    name: "trackList",
    initialState,
    reducers: {
        setTracks: (state, action: PayloadAction<MediaData[]>) => {
            state.tracks = action.payload;
        },
        setGenre: (state, action: PayloadAction<string>) => {
            state.genre = action.payload;
        },
        setArtist: (state, action: PayloadAction<string>) => {
            state.artist = action.payload;
        },
        setAlbum: (state, action: PayloadAction<string>) => {
            state.album = action.payload;
        }
    },
});

export const { setTracks, setGenre, setArtist, setAlbum } = trackListSlice.actions;
export default trackListSlice.reducer;
