//Modules Imports
import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, Pressable } from 'react-native';

//Services
import { AudioService } from '../services/AudioServices';

//Asssets
import backgrounds from '@/global/background';
import coverImage from '@/global/cover';

//Hooks
import { useAppSelector } from '../hooks/Hooks';

//Dimesiones de la pantalla
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PlayerScreen: React.FC = () => {

  //Redux State
  const track = useAppSelector(state => state.player);

  //Background
  const randomBackgroundIndex = Math.floor(Math.random() * backgrounds.length);
  const [bckgnd, setBckgnd] = useState(backgrounds[randomBackgroundIndex]);

  //Cover
  const randomCoverIndex = Math.floor(Math.random() * coverImage.length);
  const [cover, setCover] = useState(coverImage[randomCoverIndex]);

  //Seteo de cover
  useEffect(() => {
    try {
      if (track.picture !== undefined) {
        //@ts-ignore
        const filePicture = track.picture.pictureData;
        setCover({ uri: filePicture });
      }
    } catch (error) {
      setCover(coverImage[randomCoverIndex]);
      console.log(error);
    }
  }, [track.picture]);

  //Sound Services
  const audioService = AudioService();
  const [isPlaying, setIsPlaying] = useState(false);


  const playOrPauseSound = async () => {
    // Implementar la lógica para reproducir o pausar el sonido
    await audioService.playOrPauseSound();
    setIsPlaying(!isPlaying);
  };

  const stopSound = async () => {
    // Implementar la lógica para detener el sonido y desmontar
    await audioService.stopSound();
    setIsPlaying(false);
  };

  useEffect(() => {
    // Inicializar el sonido cuando se monta el componente
    if (track.uri !== undefined) {
      audioService.initializeSound(track.uri);
    }
  }, [track.uri]);

  return (
    <View style={styles.container}>
      <Image source={bckgnd} style={styles.background} />
      <Image source={cover} style={{ width: 200, height: 200 }} />
      <Pressable onPress={playOrPauseSound}>
        <Text>{isPlaying ? 'Pause Music' : 'Play Music'}</Text>
      </Pressable>
      <Pressable onPress={stopSound}>
        <Text>Stop Music</Text>
      </Pressable>
    </View>
  );
}
export default PlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
    resizeMode: 'cover',
  }
})