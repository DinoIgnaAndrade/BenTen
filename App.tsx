import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

// Importa PlayerScreen desde su ubicación correcta
import PlayerScreen from './src/screens/PlayerScreen';

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

  const TextComponent: React.FC<{ item: AudioFile }> = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={audioFiles}
        renderItem={({ item }) => <TextComponent item={item} />}
        keyExtractor={(item) => item.uri}
      />
      <PlayerScreen uri="file:///storage/7152-17E3/Music/Kaleo/06 Hey Gringo.flac" />
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
