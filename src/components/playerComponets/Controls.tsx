import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
//Icons
import PauseIcon from '../svg/controls/PauseIcon';
import PlayIcon from '../svg/controls/PlayIcon';
import RightArrowIcon from '../svg/controls/RightArrowIcon';
import LeftArrowIcon from '../svg/controls/LeftArrowIcon';

type Props = {
  isPlaying: boolean
  playOrPauseSound: () => void;
}

const Controls: React.FC<Props> = ({ isPlaying, playOrPauseSound }) => {

  return (

    <View style={styles.controlsContainer}>
      
      <Pressable style={styles.arrow} onPress={null}>
        <LeftArrowIcon size={50} color="white"/>
      </Pressable>

      <Pressable style={styles.play} onPress={playOrPauseSound}>
        {
          isPlaying
            ?
            <PauseIcon size={70} color="white"/>
            :
            <PlayIcon size={70} color="gray"/>
        }
      </Pressable>

      <Pressable style={styles.arrow} onPress={null}>
        <RightArrowIcon size={50} color="white"/>
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
    gap: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 100,
  },
  play: {
    
  },
  arrow: {
    padding: 10,
  },
})