import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system'; // Importa el módulo FileSystem
import { useState } from 'react';

import { AudioServiceType } from '../types/Types';

export function AudioService(): AudioServiceType<Audio.Sound> {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  async function initializeSound(uri: string) {
    try {
      if (sound) {
        // Si ya hay un sonido cargado, detén y descarga antes de cargar uno nuevo
        await sound.unloadAsync();
      }

      console.log('Loading Sound');
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: uri },
        { shouldPlay: false }
      );
      setSound(newSound);
    } catch (error) {
      console.error('Error loading sound', error);
    }
  }

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
        setIsPlaying(!isPlaying);
      }
    } catch (error) {
      console.error('Error playing or pausing sound', error);
    }
  }

  async function stopSound() {
    try {
      if (sound) {
        console.log('Stopping Sound');
        await sound.stopAsync();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error('Error stopping sound', error);
    }
  }
  
  return {
    sound,
    isPlaying,
    initializeSound,
    playOrPauseSound,
    stopSound,
  };
}