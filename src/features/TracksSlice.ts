import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MediaData } from "@/types/Types";

type TrackListState = {
    tracks: MediaData[];
    tracksQueue: MediaData[];

    tracksByGenre: MediaData[];
    tracksByArtist: MediaData[];
    tracksByAlbum: MediaData[];

    genres: string[];
    artists: string[];
    albums: string[];

    genre: string;
    artist: string;
    album: string;
}
const initialState: TrackListState = {
    tracks: [],
    tracksQueue: [],

    tracksByGenre: [],
    tracksByArtist: [],
    tracksByAlbum: [],

    genres: [],
    artists: [],
    albums: [],

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
        setTracksQueue: (state, action: PayloadAction<MediaData[]>) => {
            state.tracksQueue = action.payload;
        },
        

        setTracksByGenre: (state) => {
            state.tracksByGenre = state.tracks.filter(track => track.genre === state.genre);
        },
        setTracksByArtist: (state) => {
            state.tracksByArtist = state.tracks.filter(track => track.artist === state.artist);
        },
        setTracksByAlbum: (state) => {
            state.tracksByAlbum = state.tracks.filter(track => track.album === state.album);
        },

        setGenres: (state) => {
            const allArtists = state.tracks.map(track => track.genre);
            state.genres = Array.from(new Set(allArtists));
        },
        setArtists: (state) => {
            const allArtists = state.tracks.map(track => track.artist);
            state.artists = Array.from(new Set(allArtists));
        },
        setAlbums: (state) => {
            const allAlbums = state.tracks.map(track => track.album);
            state.albums = Array.from(new Set(allAlbums));
        },

        setCategoryGenre: (state, action: PayloadAction<string>) => {
            state.genre = action.payload;
        },
        setCategoryArtist: (state, action: PayloadAction<string>) => {
            state.artist = action.payload;
        },
        setCategoryAlbum: (state, action: PayloadAction<string>) => {
            state.album = action.payload;
        }
    },
});

export const
    {
        setTracks,
        setTracksQueue,

        setTracksByGenre,
        setTracksByArtist,
        setTracksByAlbum,

        setGenres,
        setArtists,
        setAlbums,

        setCategoryGenre,
        setCategoryArtist,
        setCategoryAlbum

    } = trackListSlice.actions;

export default trackListSlice.reducer;
