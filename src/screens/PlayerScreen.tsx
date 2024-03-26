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

//Icons
import { EvilIcons } from '@expo/vector-icons';
import Controls from '@/components/playerComponets/Controls';
import TagInfo from '@/components/playerComponets/TagInfo';
import Slider from '@/components/playerComponets/Slider';

//Dimesiones de la pantalla
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PlayerScreen: React.FC = () => {

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

  // Inicializar el sonido cuando se monta el componente
  useEffect(() => {
    if (track.uri !== '') {
      audioService.initializeSound(track.uri);
      setIsPlaying(true);
    }
  }, [track.uri]);

  //Funciones de control
  const playOrPauseSound = async () => {
    // Implementar la lógica para reproducir o pausar el sonido
    await audioService.playOrPauseSound();
    audioService.isPlaying ? setIsPlaying(false) : setIsPlaying(true);
  };

  //Seteo de cover
  useEffect(() => {
    try {
      if (track.picture !== undefined) {
        //@ts-ignore
        const filePicture = track.picture.pictureData;
        setCover({ uri: filePicture });
      }
    } catch (error) {
      setCover(coverImage[randomCoverIndex]);
      console.log(error);
    }
  }, [track.picture]);

  return (
    <View style={styles.container}>

      <Image source={bckgnd} style={styles.background} />

      {/* <Slider
        duration={track.duration}
        isPlaying={isPlaying}
      /> */}

      <TagInfo
        coverImage={cover}
        artist={track.artist}
        title={track.title}
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
  imageCover: {
    width: '80%',
    height: '40%',
    borderRadius: 50,
  },

  //Textos
  infoContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
  artist: {
    fontSize: 18,
    color: 'white',
  },

})