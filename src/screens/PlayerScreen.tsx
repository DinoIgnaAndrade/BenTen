import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export default function PlayerScreen() {
  const [sound, setSound] = useState<any>(undefined);
  const [isPlaying, setIsPlaying] = useState(false);

  async function playOrPauseSound() {
    try {
      if (sound) {
        if (isPlaying) {
          console.log('Pausing Sound');
          await sound.pauseAsync();
        } else {
          console.log('Resuming Sound');
          await sound.playAsync();
        }
        setIsPlaying(!isPlaying); // Alternar el estado de reproducción
      } else {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/music/07 Automobile.mp3'));
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Error loading, playing, or pausing sound', error);
    }
  }

  useEffect(() => {
    return () => {
      stopSound(); // Asegúrate de detener el sonido al desmontar el componente
    };
  }, []);

  async function stopSound() {
    if (sound) {
      console.log('Stopping Sound');
      await sound.stopAsync();
      setIsPlaying(false); // Actualizar el estado de reproducción
      // Opcional: Descargar el sonido después de detenerlo si ya no se necesita
      // await sound.unloadAsync();
    }
  }

  return (
    <View>
      <TouchableOpacity onPress={playOrPauseSound}>
        <Text>{isPlaying ? 'Pause Music' : 'Play Music'}</Text>
      </TouchableOpacity>
    </View>
  );
}
