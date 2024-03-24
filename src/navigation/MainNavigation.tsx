import React, { useEffect } from 'react'

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';

//Redux
import { useAppDispatch } from '@/hooks/Hooks';

//Services
import { getAudioFiles } from '@/services/AudioFilesServices';
import { setTracks } from '@/features/TracksSlice';

const MainNavigation = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchAudioFiles = async () => {
          try {
            const files = await getAudioFiles();
            dispatch(setTracks(files));
          } catch (error) {
            console.error('Error al obtener archivos de audio:', error);
          }
        };
        fetchAudioFiles();
      }, []);

    return (
        <NavigationContainer>

            <TabNavigator />

        </NavigationContainer>
    )
}

export default MainNavigation;