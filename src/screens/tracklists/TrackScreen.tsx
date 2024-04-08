import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
//Components
import TrackList from '@/components/lists/TrackList'
//Assets
import backgrounds from '@/global/background';
//Hooks
import { useAppSelector } from '@/hooks/ReduxHooks';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TrackScreen = () => {

  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const [bckgnd, setBckgnd] = useState(backgrounds[randomIndex]);

  const audioFiles = useAppSelector(state => state.trackList.tracks);

  return (
    <View>
      <Image source={bckgnd} style={styles.background} />
      <TrackList audioFiles={audioFiles}/>
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