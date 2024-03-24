//Modules Imports
import { View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'

import { useAppDispatch } from '@/hooks/Hooks';
import { setTracks } from '@/features/TracksSlice';

//Components
import Card from './cards/Card';

//Asssets
import backgrounds from '@/global/background';
import { useAppSelector } from '@/hooks/Hooks';

//Services
import { getAudioFiles } from '../services/AudioFilesServices';

//Dimesiones de la pantalla
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TrackList: React.FC = () => {

  const audioFiles = useAppSelector(state => state.trackList.tracks);

  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const [bckgnd, setBckgnd] = useState(backgrounds[randomIndex]);

  return (
    <>
      <Image source={bckgnd} style={styles.background} />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ backfaceVisibility: 'hidden', backgroundColor: 'transparent' }}
        data={audioFiles}
        renderItem={({ item }) => <Card track={item} />}
        keyExtractor={(item) => item.uri}
      />
    </>

  )
}

export default TrackList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  background: {
    flex: 1,
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
    resizeMode: 'cover',
  }
})