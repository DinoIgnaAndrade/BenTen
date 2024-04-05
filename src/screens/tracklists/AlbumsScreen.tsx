import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
//Components
import TrackList from '@/components/TrackList'
//Assets
import backgrounds from '@/global/background';
//Hooks
import { useAppSelector } from '@/hooks/ReduxHooks';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AlbumScreen = () => {
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const [bckgnd, setBckgnd] = useState(backgrounds[randomIndex]);

  const albums: string[] = useAppSelector((state) => state.trackList.albums);
  
  return (
    <View>
      <Image source={bckgnd} style={styles.background} />
      <TrackList text={albums}/>
    </View>
  )
}

export default AlbumScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
    resizeMode: 'cover',
  }
})