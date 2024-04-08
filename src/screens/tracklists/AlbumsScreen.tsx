import React, { useEffect, useState } from 'react'
//Assets
import backgrounds from '@/global/background';
//Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/ReduxHooks';
import List from '@/components/lists/List';
import { MediaData } from '@/types/Types';
import { setCategoryAlbum, setTracksByAlbum } from '@/features/TracksSlice';

const AlbumScreen = () => {

  const dispatch = useAppDispatch()
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const [bckgnd, setBckgnd] = useState(backgrounds[randomIndex]);
  const [showTrack, setShowTrack] = useState(false)

  const albums: string[] = useAppSelector((state) => state.trackList.albums);
  const album: string = useAppSelector((state) => state.trackList.album);
  const tracks: MediaData[] = useAppSelector((state) => state.trackList.tracksByAlbum);

  console.log(album)

  useEffect(() => {
    if (album) {
      setShowTrack(true)
      dispatch(setTracksByAlbum());
    }
  }, [album])

  const handleBack = () => {
    dispatch(setCategoryAlbum(''))
    setShowTrack(false)
  }

  return (

      <List category='album' backgroundSource={bckgnd} showTrack={showTrack} list={albums} tracks={tracks} onBackPress={handleBack} />
  )
}

export default AlbumScreen
