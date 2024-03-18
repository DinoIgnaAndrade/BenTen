// Modules Imports
import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';

//Types
import { MediaData } from '@/types/Types';

//Reducer
import { setAttributes } from '@/features/PlayerSlice';

//Hooks
import { useAppDispatch } from '@/hooks/hooks';

type Props = {
  track: MediaData;
}

const Card: React.FC<Props> = ({ track }) => {

  //Dispatch
  const dispatch = useAppDispatch();

  const onPress = () =>{
    dispatch(setAttributes({title: track.title, artist: track.artist, album: track.album, genre: track.genre, picture: track.picture, uri: track.uri, duration: track.duration}));
  }

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{track.title}</Text>
      <Text style={styles.artitst}>{track.artist}</Text>
    </Pressable>
  )
}

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'flex-start',
    padding:10,
  },
  title:{
    fontSize: 20,
  },
  artitst:{

  }
})