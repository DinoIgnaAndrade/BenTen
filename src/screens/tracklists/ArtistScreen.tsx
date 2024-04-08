import React, { useEffect, useState } from 'react'
//Assets
import backgrounds from '@/global/background';
//Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/ReduxHooks';
//Redux
import {setCategoryArtist, setTracksByArtist } from '@/features/TracksSlice';
//Types
import { MediaData } from '@/types/Types';
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

  const handleBack = () => {
    dispatch(setCategoryArtist(''))
    setShowTrack(false)
  }

  return (
    <List category='artist' backgroundSource={bckgnd} showTrack={showTrack} list={artists} tracks={tracks} onBackPress={handleBack} />
  )
}

export default ArtistScreen
