//Modules Imports
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';

//Services
import { AudioService } from '../services/AudioServices';

//Asssets
import backgrounds from '@/global/background';

//Hooks
import { useAppSelector } from '@/hooks/hooks';

//Dimesiones de la pantalla
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PlayerScreen: React.FC = () => {

  //Background
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const [bckgnd, setBckgnd] = useState(backgrounds[randomIndex]);

  //Sound Services
  const audioService = AudioService();
  const [isPlaying, setIsPlaying] = useState(false);

  //Redux State
  const track = useAppSelector(state => state.player);

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
      <TouchableOpacity onPress={playOrPauseSound}>
        <Text>{isPlaying ? 'Pause Music' : 'Play Music'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={stopSound}>
        <Text>Stop Music</Text>
      </TouchableOpacity>
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