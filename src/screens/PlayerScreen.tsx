//Modules Imports
import React, { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet, Image, Pressable } from 'react-native';
//Services
import { AudioService } from '../services/AudioServices';
//Asssets
import backgrounds from '@/global/background';
import coverImage from '@/global/cover';
import PlaylistQueueIcon from '@/components/svg/controls/PlaylistQueueIcon'
//Hooks
import { useAppDispatch, useAppSelector } from '../hooks/ReduxHooks';
import { useCoverSettingImage, useReset, useSetTime, useSoundInitialization, useTimeConversion } from '@/hooks/usePlayerEffects';
//Components
import Controls from '@/components/playerComponets/Controls';
import TagInfo from '@/components/playerComponets/TagInfo';
import Slider from '@/components/playerComponets/Slider';
import ModalListQueue from '@/components/modal/ModalListQueue';
//Tipos
import { MediaData, Time } from '@/types/Types';
//Redux
import { setTracksQueue } from '@/features/TracksSlice';
import { setAttributes } from '@/features/PlayerSlice';

//Dimesiones de la pantalla
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PlayerScreen: React.FC = () => {
  //STATES
  //Track Time
  const [trackDuration, setTrackDuration] = useState<Time>({ minutes: 0, seconds: 0 });
  const [currentTime, setCurrentTime] = useState<Time>({ minutes: 0, seconds: 0 });
  const [changeTime, setChangeTime] = useState<Time>({ minutes: 0, seconds: 0 });
  //Modal
  const [modalVisible, setModalVisible] = useState(false);
  //Redux State
  const dispatch = useAppDispatch();
  const track = useAppSelector(state => state.player);
  const trackQueue: MediaData[] = useAppSelector(state => state.trackList.tracksQueue);

  const handleInitialState = () => {
    dispatch(setTracksQueue([]));
  }

  useEffect(() => {
    handleInitialState();
  }, [])

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
  //FUNCIONES DE CONTROL
  const setTrack = ({ track }: { track: MediaData }) => {
    if (track) {
      dispatch(setAttributes({
        title: track.title,
        artist: track.artist,
        album: track.album,
        genre: track.genre,
        picture: track.picture,
        uri: track.uri,
        duration: track.duration
      }));
    }
  }
  const playOrPauseSound = async () => {
    // Implementar la lógica para reproducir o pausar el sonido
    await audioService.playOrPauseSound();
    audioService.isPlaying ? setIsPlaying(false) : setIsPlaying(true);
  };
  const nextTrack = () => {
    if (trackQueue.length === 0) {
      return;
    }
    const currentIndex = trackQueue.findIndex(song => song.uri === track.uri);
    if (currentIndex === -1) {
      return;
    }
    if (currentIndex < trackQueue.length - 1) {
      const nextTrack: MediaData = trackQueue[currentIndex + 1];
      dispatch(setAttributes({
        title: nextTrack.title,
        artist: nextTrack.artist,
        album: nextTrack.album,
        genre: nextTrack.genre,
        picture: nextTrack.picture,
        uri: nextTrack.uri,
        duration: nextTrack.duration
      }));
    }
  }
  const previousTrack = () => {
    if (trackQueue.length === 0) {
      return;
    }
    const currentIndex = trackQueue.findIndex(song => song.uri === track.uri);
    if (currentIndex === -1 || currentIndex === 0) {
      return;
    }
    if (currentIndex < trackQueue.length - 1) {
      const nextTrack: MediaData = trackQueue[currentIndex - 1];
      dispatch(setAttributes({
        title: nextTrack.title,
        artist: nextTrack.artist,
        album: nextTrack.album,
        genre: nextTrack.genre,
        picture: nextTrack.picture,
        uri: nextTrack.uri,
        duration: nextTrack.duration
      }));
    }
  }
  return (
    <View style={styles.container}>

      <Image source={bckgnd} style={styles.background} />

      <Pressable style={styles.playlist} onPress={() => setModalVisible(true)}>
        <PlaylistQueueIcon color={'white'} size={40} />
      </Pressable>


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
        nextTrackHandler={nextTrack}
        previousTrackHandler={previousTrack}
      />

      <ModalListQueue modalVisibleHandler={() => setModalVisible(false)} modalVisible={modalVisible} audioFiles={trackQueue} setTrackHandler={setTrack} />

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

  playlist: {
    position: 'absolute',
    top: 30,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 1000,
    padding: 10,
  }
})