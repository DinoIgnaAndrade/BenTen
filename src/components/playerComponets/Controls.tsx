import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

//Icons
import { EvilIcons } from '@expo/vector-icons';

type Props = {
  isPlaying: boolean
  playOrPauseSound: () => void;
}

const Controls: React.FC<Props> = ({ isPlaying, playOrPauseSound }) => {

  return (

    <View style={styles.controlsContainer}>
      
      <Pressable style={styles.arrow} onPress={null}>
        <EvilIcons name="chevron-left" size={50} color="black" />
      </Pressable>

      <Pressable style={styles.play} onPress={playOrPauseSound}>
        {
          isPlaying
            ?
            <EvilIcons name="play" size={54} color="black"/>
            :
            <EvilIcons name="play" size={50} color="grey" />
        }
      </Pressable>

      <Pressable style={styles.arrow} onPress={null}>
        <EvilIcons name="chevron-right" size={50} color="black" />
      </Pressable>
    </View>

  )
}

export default Controls

const styles = StyleSheet.create({
  //Controles
  controlsContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 100,
  },
  play: {
    padding: 10,
    margin: 10,
  },
  arrow: {
    padding: 10,
    margin: 10,
  },
})