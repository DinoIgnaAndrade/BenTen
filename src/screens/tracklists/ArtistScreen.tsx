import React, { useEffect, useState } from 'react'
//Assets
import backgrounds from '@/global/background';
//Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/ReduxHooks';
//Redux
import { setCategoryArtist, setTracksByArtist, setTracksQueue } from '@/features/TracksSlice';
import { setAttributes } from '@/features/PlayerSlice';
//Types
import { MediaData } from '@/types/Types';
//Components
import List from '@/components/lists/List';


const ArtistScreen = () => {
  const dispatch = useAppDispatch()
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const [bckgnd, setBckgnd] = useState(backgrounds[randomIndex]);
  const [showTrack, setShowTrack] = useState(false)

  const artists: string[] = useAppSelector((state) => state.trackList.artists);
  const artist: string = useAppSelector((state) => state.trackList.artist);
  const tracks: MediaData[] = useAppSelector((state) => state.trackList.tracksByArtist);

  useEffect(() => {
    if (artist) {
      setShowTrack(true)
      dispatch(setTracksByArtist());
    }
  }, [artist])

  const setTrack = ({ track }: { track: MediaData }) => {
    if (track) {
      dispatch(setAttributes({
        title: track.title,
        artist: track.artist,
        album: track.album,
        genre: track.genre,
        picture: track.picture,
        uri: track.uri,
        duration: track.duration
      }));
    }
  }
  const setQueue = () => {
    dispatch(setTracksQueue(tracks))
  }

  const handleBack = () => {
    dispatch(setCategoryArtist(''))
    setShowTrack(false)
  }

  return (

    <List
      category='artist'
      backgroundSource={bckgnd}
      showTrack={showTrack}
      list={artists}
      tracks={tracks}
      onBackPress={handleBack}
      setTrackHandler={setTrack}
      setQueueHandler={setQueue}
    />

  )
}
export default ArtistScreen
