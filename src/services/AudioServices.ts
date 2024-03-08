import { AudioServiceType } from '../types/Types';
import { Audio } from 'expo-av';
import { useState } from 'react';

export function createAudioService<T>(url: string): AudioServiceType<T> {
  const [sound, setSound] = useState<T | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  async function initializeSound(url: string) {
    try {
      console.log('Loading Sound');
      const { sound: newSound } = await Audio.Sound.createAsync({ uri: url });
      setSound(newSound as T);
    } catch (error) {
      console.error('Error loading sound', error);
    }
  }

  async function playOrPauseSound() {
    try {
      if (sound) {
        if (isPlaying) {
          console.log('Pausing Sound');
          await (sound as any).pauseAsync();
        } else {
          console.log('Resuming Sound');
          await (sound as any).playAsync();
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
        await (sound as any).stopAsync();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error('Error stopping sound', error);
    }
  }

  // Llama a initializeSound al crear la instancia
  initializeSound(url);

  return {
    sound,
    isPlaying,
    playOrPauseSound,
    stopSound,
  };
}
