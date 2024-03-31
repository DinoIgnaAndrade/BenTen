// Modules Imports
import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native';

//Types
import { MediaData } from '@/types/Types';

//Reducer
import { setAttributes } from '@/features/PlayerSlice';

//Hooks
import { useAppDispatch } from '../../hooks/ReduxHooks';
import { AudioService } from './../../services/AudioServices';

type Props = {
  track: MediaData;
}

const Card: React.FC<Props> = ({ track }) => {

  //Dispatch
  const dispatch = useAppDispatch();

  const onPress = () =>{
    dispatch(setAttributes({
      title: track.title, 
      artist: track.artist, 
      album: track.album, 
      genre: track.genre, 
      picture: track.picture, 
      uri: track.uri, 
      duration: track.duration}));
  }

  return (
    <Pressable 
      onPress={onPress}
      style={({pressed}) => [
        {opacity: pressed ? 0.5 : 1}
        ,styles.container]}
        android_ripple={{color: '#fff'}} 
      >
      <Text style={styles.title}>{track.title}</Text>
      <Text style={styles.artitst}>{track.artist}</Text>
    </Pressable>
  )
}

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'flex-start',
    padding:10,
  },
  title:{
    fontSize: 20,
  },
  artitst:{

  }
})