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
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const [bckgnd, setBckgnd] = useState(backgrounds[randomIndex]);

  //Cover
  const coverI = coverImage[randomIndex];
  //@ts-ignore
  const image: any = track.picture.pictureData? track.picture.pictureData : coverI;

  //Sound Services
  const audioService = AudioService();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Inicializar el sonido cuando se monta el componente
    audioService.initializeSound(track.uri);
  }, [track.uri]);

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

  return (
    <View style={styles.container}>
      <Image source={bckgnd} style={styles.background} />
      <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
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
  container:{
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