import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

// Importa PlayerScreen desde su ubicación correcta
import PlayerScreen from './src/screens/PlayerScreen';
import TrackList from '@/components/TrackList';

// Importa la función getAudioFiles desde su ubicación correcta
import { AudioFile } from '@/types/Types';
import { getAudioFiles } from './src/services/AudioFilesServices';

export default function App() {
  const [audioFiles, setAudioFiles] = useState<AudioFile[]>([]);

  useEffect(() => {
    async function obtenerArchivosDeAudio() {
      try {
        const archivos = await getAudioFiles();
        setAudioFiles(archivos);
        console.log('Archivos obtenidos', archivos);
      } catch (error) {
        console.error('Error al buscar archivos de audio:', error);
      }
    }
    obtenerArchivosDeAudio();
  }, []);



  return (
    <View style={styles.container}>
      <TrackList audioFiles={audioFiles} />
      <PlayerScreen uri= "file:///storage/7152-17E3/Music/Kaleo/02 Way Down We Go.mp3" />
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
