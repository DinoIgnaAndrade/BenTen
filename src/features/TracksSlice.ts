import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MediaData } from "@/types/Types";

interface TrackListState {
    tracks: MediaData[];
}

const initialState: TrackListState = {
    tracks: [],
}

export const trackListSlice = createSlice({
    name: "trackList",
    initialState,
    reducers: {
        setTracks: (state, action: PayloadAction<MediaData[]>) => {
            state.tracks = action.payload;
            console.log(state.tracks)
        },
    },
});

export const { setTracks } = trackListSlice.actions;
export default trackListSlice.reducer;
