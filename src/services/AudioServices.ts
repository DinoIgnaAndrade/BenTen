import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';

import { AudioServiceType } from '../types/Types';

export function AudioService(): AudioServiceType<Audio.Sound> {

  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [status, setStatus] = useState<any>(null);
  
  async function initializeSound(uri: string) {
    try {
      if (sound) {
        // Si ya hay un sonido cargado, detén y descarga antes de cargar uno nuevo
        await sound.unloadAsync();
      }
      console.log('Loading Sound');
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: uri },
        { shouldPlay: true }
      );
      setSound(newSound);
      setStatus(await newSound.getStatusAsync());
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

  // Desmonta el audio
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

  async function setLoop(boolean: boolean) {
    try {
      if (sound) {
        await sound.setIsLoopingAsync(boolean);
      }
    } catch (error) {
      console.log('Loop Error', error);
    }
  }

  // Sete la psicion del audio.
  async function setMiliSecondsPosition(position: number) {
    try {
      if (sound) {
        await sound.setPositionAsync(position);
      }
    } catch (error) {
      console.log('Position Error', error);
    }
  }

  return {
    initializeSound,
    sound,
    isPlaying,
    playOrPauseSound,
    stopSound,
    setLoop,
    setMiliSecondsPosition,
  };
}