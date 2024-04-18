import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
//Components
import List from '@/components/lists/List';
//Assets
import backgrounds from '@/global/background';
//Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/ReduxHooks';
//Redux
import { setCategoryGenre, setTracksByGenre, setTracksQueue } from '@/features/TracksSlice';
import { setAttributes } from '@/features/PlayerSlice';
//types
import { MediaData } from '@/types/Types';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const GenreScreen = () => {

  const dispatch = useAppDispatch()
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const [bckgnd, setBckgnd] = useState(backgrounds[randomIndex]);
  const [showTrack, setShowTrack] = useState(false)

  const genres: string[] = useAppSelector((state) => state.trackList.genres);
  const genre: string = useAppSelector((state) => state.trackList.genre);
  const tracks: MediaData[] = useAppSelector((state) => state.trackList.tracksByGenre);

  useEffect(() => {
    if (genre) {
      setShowTrack(true)
      dispatch(setTracksByGenre());
    }
  }, [genre])

  const setTrackHandler = ({ track }: { track: MediaData }) => {
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
    dispatch(setCategoryGenre(''))
    setShowTrack(false)
  }

  return (
    <List 
      category='genre' 
      backgroundSource={bckgnd} 
      showTrack={showTrack} 
      list={genres} 
      tracks={tracks} 
      onBackPress={handleBack}
      setTrackHandler={setTrackHandler}
      setQueueHandler={setQueue} />
  )
}

export default GenreScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
    resizeMode: 'cover',
  }
})