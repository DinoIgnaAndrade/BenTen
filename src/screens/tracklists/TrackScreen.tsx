import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
//Components
import TrackList from '@/components/lists/TrackList'
//Assets
import backgrounds from '@/global/background';
//Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/ReduxHooks';
//Types
import { MediaData } from '@/types/Types';
//Redux
import { setAttributes } from '@/features/PlayerSlice';
import { setTracksQueue } from '@/features/TracksSlice';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TrackScreen = () => {

  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const [bckgnd, setBckgnd] = useState(backgrounds[randomIndex]);

  const tracks = useAppSelector(state => state.trackList.tracks);

  const dispatch = useAppDispatch();
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

  return (
    <View>
      <Image source={bckgnd} style={styles.background} />
      <TrackList audioFiles={tracks} category='all' setTrackHandler={setTrackHandler} setQueueHandler={setQueue}/>
    </View>
  )
}

export default TrackScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
    resizeMode: 'cover',
  }
})