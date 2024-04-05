//Modules Imports
import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Image } from 'react-native';
//Services
import { AudioService } from '../services/AudioServices';
//Asssets
import backgrounds from '@/global/background';
import coverImage from '@/global/cover';
//Hooks
import { useAppSelector } from '../hooks/ReduxHooks';
import { useCoverSettingImage, useReset, useSetTime, useSoundInitialization, useTimeConversion } from '@/hooks/usePlayerEffects';
//Components
import Controls from '@/components/playerComponets/Controls';
import TagInfo from '@/components/playerComponets/TagInfo';
import Slider from '@/components/playerComponets/Slider';
//Tipos
import { Time } from '@/types/Types';

//Dimesiones de la pantalla
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PlayerScreen: React.FC = () => {
  //STATES
  //Track Time
  const [trackDuration, setTrackDuration] = useState<Time>({ minutes: 0, seconds: 0 });
  const [currentTime, setCurrentTime] = useState<Time>({ minutes: 0, seconds: 0 });
  const [changeTime, setChangeTime] = useState<Time>({ minutes: 0, seconds: 0 });
  //Redux State
  const track = useAppSelector(state => state.player);
  //Sound Services
  const audioService = AudioService();
  const [isPlaying, setIsPlaying] = useState(false);
  //Background
  const randomBackgroundIndex = Math.floor(Math.random() * backgrounds.length);
  const [bckgnd, setBckgnd] = useState(backgrounds[randomBackgroundIndex]);
  //Cover
  const randomCoverIndex = Math.floor(Math.random() * coverImage.length);
  const [cover, setCover] = useState(coverImage[randomCoverIndex]);
  //HOOKS
  // Inicializar el sonido cuando se monta el componente
  useSoundInitialization(track.uri, track.duration, setCurrentTime, setIsPlaying, setTrackDuration, audioService);
  //Seteo de cover
  useCoverSettingImage(track, randomCoverIndex, coverImage, setCover);
  //Conversion de tiempo
  useTimeConversion(isPlaying, setCurrentTime);
  //Reseteo de y desmonte
  useReset(currentTime, trackDuration, setIsPlaying, audioService, setCurrentTime);
  //Seteo de tiempo
  useSetTime(changeTime, audioService, setCurrentTime);

  //Funciones de control
  const playOrPauseSound = async () => {
    // Implementar la lógica para reproducir o pausar el sonido
    await audioService.playOrPauseSound();
    audioService.isPlaying ? setIsPlaying(false) : setIsPlaying(true);
  };

  return (
    <View style={styles.container}>

      <Image source={bckgnd} style={styles.background} />

      <Slider
        totalDuration={trackDuration}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        setChangeTime={setChangeTime}
        image={cover}
      />

      <TagInfo
        artist={track.artist}
        title={track.title}
        trackDuration={trackDuration}
        currentTime={currentTime}
      />

      <Controls
        isPlaying={isPlaying}
        playOrPauseSound={playOrPauseSound}
      />

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

  //Imagenes
  background: {
    flex: 1,
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
    resizeMode: 'cover',
  },
})