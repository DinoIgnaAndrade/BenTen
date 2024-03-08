import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createAudioService } from '../services/AudioServices';

export default function PlayerScreen() {
  const audioService = createAudioService('../assets/music/07 Automobile.mp3');
  const [isPlaying, setIsPlaying] = useState(false);

  const playOrPauseSound = async () => {
    await audioService.playOrPauseSound();
    setIsPlaying(!isPlaying);
  };

  return (
    <View>
      <TouchableOpacity onPress={playOrPauseSound}>
        <Text>{isPlaying ? 'Pause Music' : 'Play Music'}</Text>
      </TouchableOpacity>
    </View>
  );
}