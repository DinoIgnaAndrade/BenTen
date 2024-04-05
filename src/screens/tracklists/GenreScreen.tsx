import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
//Components
import TrackList from '@/components/TrackList'
//Assets
import backgrounds from '@/global/background';
//Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/ReduxHooks';
//Redux
import { setGenres } from '@/features/TracksSlice';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const GenreScreen = () => {
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const [bckgnd, setBckgnd] = useState(backgrounds[randomIndex]);

  const genres: string[] = useAppSelector(state => state.trackList.genres);

  return (
    <View>
      <Image source={bckgnd} style={styles.background} />
      <TrackList text={genres}/>
    </View>
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