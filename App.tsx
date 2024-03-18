//Modules Imports
import React, { useEffect, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { Provider, useDispatch } from 'react-redux';

//Redux
import store from './src/store/Store';

//Screens
import PlayerScreen from './src/screens/PlayerScreen';
import TrackList from '@/components/TrackList';

//Types
import { MediaData } from '@/types/Types';

//Services
import { getAudioFiles } from './src/services/AudioFilesServices';

export default function App() {

  //State
  const [audioFiles, setAudioFiles] = useState<MediaData[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  //GetAudioFiles
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
    <Provider store={store}>
      <View style={styles.container}>
        <TrackList audioFiles={audioFiles} />

        <Pressable
          style={styles.button}
          onPress={() => setModalVisible(true)}>
          <Text>Press Me</Text>
        </Pressable>

      </View>

      <Modal
        visible={modalVisible}
        animationType='slide'
      >
        <PlayerScreen />
      </Modal>

    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
});
