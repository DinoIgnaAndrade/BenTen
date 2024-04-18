import React, { useEffect, useState } from 'react'
import {View, StyleSheet } from 'react-native';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';

//Redux
import { useAppDispatch } from '@/hooks/ReduxHooks';

//Services
import { getAudioFiles } from '@/services/AudioFilesServices';
import { setAlbums, setArtists, setGenres, setTracks } from '@/features/TracksSlice';

//Components
import ActivityIndicator from '../components/ActivityIndicator' 

const MainNavigation = () => {

  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchAudioFiles = async () => {
      try {
        const files = await getAudioFiles();
        dispatch(setTracks(files));
        dispatch(setAlbums());
        dispatch(setGenres());
        dispatch(setArtists());
        setIsLoading(false);
      } catch (error) {
        console.error('Error al obtener archivos de audio:', error);
        setIsLoading(false);
      }
    };
    fetchAudioFiles();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>

      <TabNavigator />

    </NavigationContainer>
  )
}

export default MainNavigation;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});