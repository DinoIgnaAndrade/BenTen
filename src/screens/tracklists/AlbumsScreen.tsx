import React, { useEffect, useState } from 'react'
//Assets
import backgrounds from '@/global/background';
//Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/ReduxHooks';
//Redux
import { setCategoryAlbum, setTracksByAlbum, setTracksQueue } from '@/features/TracksSlice';
import { setAttributes } from '@/features/PlayerSlice';
//Components
import List from '@/components/lists/List';
//Types
import { MediaData } from '@/types/Types';

const AlbumScreen = () => {
  const dispatch = useAppDispatch()
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const [bckgnd, setBckgnd] = useState(backgrounds[randomIndex]);
  const [showTrack, setShowTrack] = useState(false)

  const albums: string[] = useAppSelector((state) => state.trackList.albums);
  const album: string = useAppSelector((state) => state.trackList.album);
  const tracks: MediaData[] = useAppSelector((state) => state.trackList.tracksByAlbum);

  useEffect(() => {
    if (album) {
      setShowTrack(true)
      dispatch(setTracksByAlbum());
    }
  }, [album])

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
    dispatch(setCategoryAlbum(''))
    setShowTrack(false)
  }

  return (
      <List 
        category='album' 
        backgroundSource={bckgnd} 
        showTrack={showTrack} 
        list={albums} 
        tracks={tracks} 
        onBackPress={handleBack}
        setTrackHandler={setTrack}
        setQueueHandler={setQueue} />
  )
}

export default AlbumScreen
