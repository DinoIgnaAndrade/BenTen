//Imports
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
//Components
import TrackList from '../lists/TrackList';
//Types
import { MediaData} from '@/types/Types';
import BackIcon from '../svg/tracklistJcon/BackIcon';

type Props = {
  modalVisible: boolean
  audioFiles: MediaData[]
  modalVisibleHandler: () => void
  setTrackHandler: ( { track }: { track: MediaData }) => void
}

const ModalListQueue: React.FC<Props> = ({ modalVisible, modalVisibleHandler, audioFiles , setTrackHandler }) => {

  return (
    <Modal animationType='fade' transparent={true} visible={modalVisible}>

      <View style={styles.modal}>

        <Pressable style={styles.back} onPress={modalVisibleHandler}>
          <BackIcon color='white' size={30} />
        </Pressable>

        <TrackList audioFiles={audioFiles} setTrackHandler={setTrackHandler} />

      </View>

    </Modal>
  )
}

export default ModalListQueue

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    padding: 20,
    gap: 15,
  },
  back: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 50,
    height: 50,
    borderRadius: 1000,
  },
  backText: {
    color: 'white',
  }

})