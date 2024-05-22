// Modules Imports
import React, { useState } from 'react'
import { Text, StyleSheet, Pressable } from 'react-native';
//Types
import { MediaData } from '@/types/Types';
//Hooks
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
//Redux
import { setCategoryArtist, setCategoryGenre, setCategoryAlbum } from '@/features/TracksSlice';

type Props = {
  track?: MediaData;
  text?: string;
  category?: string;
  setTrackHandler?: ({ track }: { track: MediaData }) => void;
  setQueueHandler?: () => void;
}

const Card: React.FC<Props> = ({ track, text, category ,setTrackHandler, setQueueHandler }) => {
  //Dispatch
  const dispatch = useAppDispatch();


  const onPressFilter = () => {
    switch (category) {
      case 'artist': {
        dispatch(setCategoryArtist(text!));
        break;
      }
      case 'album': {
        dispatch(setCategoryAlbum(text!));
        break;
      }
      case 'genre': {
        dispatch(setCategoryGenre(text!));
        break;
      }
      default: {
        
      }
    }
  }
  
  const onPress = () => {
    if (setTrackHandler) {
      setTrackHandler({ track: track! });
    }
    if(setQueueHandler){
      setQueueHandler();
    }
    onPressFilter();
  }

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1 }
        , styles.container]}
      android_ripple={{ color: '#fff' }}
    >
      {
        text
          ?
          <Text style={styles.title}>{text}</Text>
          :
          <>
            <Text style={styles.title}>{track?.title}</Text>
            <Text style={styles.artitst}>{track?.artist}</Text>
          </>
      }

    </Pressable>
  )
}

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'flex-start',
    borderRadius: 30,
    padding: 10,
    margin: 1,
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  artitst: {
    fontWeight: 'bold',
    color: 'white',
  }
})