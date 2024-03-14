import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import PlayerScreen from './src/screens/PlayerScreen';
import TrackList from '@/components/TrackList';

import { MediaData } from '@/types/Types';

import { getAudioFiles } from './src/services/AudioFilesServices';

export default function App() {
  const [audioFiles, setAudioFiles] = useState<MediaData[]>([]);
  const uri: string = "file:///storage/7152-17E3/Music/Kaleo/02 Way Down We Go.mp3";

 useEffect(() => {
    const fetchAudioFiles = async () => {
      try {
        const files = await getAudioFiles();
        setAudioFiles(files);
      } catch (error) {
        console.error('Error al obtener archivos de audio:', error);
      }
    };

    fetchAudioFiles();
  }, []);


  return (
    <View style={styles.container}>
      <TrackList audioFiles={audioFiles} />
      <PlayerScreen uri={uri} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
