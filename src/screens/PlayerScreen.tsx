import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { AudioService } from '../services/AudioServices';

type Props = {
  uri: string;
}

const PlayerScreen: React.FC<Props> = ({ uri }) => {

  const audioService = AudioService();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Inicializar el sonido cuando se monta el componente
    audioService.initializeSound(uri);
  }, [uri]);

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
    <View>
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
