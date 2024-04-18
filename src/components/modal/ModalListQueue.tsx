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
}

const ModalListQueue: React.FC<Props> = ({ modalVisible, modalVisibleHandler, audioFiles }) => {

  return (
    <Modal animationType='slide' transparent={true} visible={modalVisible}>

      <View style={styles.modal}>
        <Pressable style={styles.back} onPress={modalVisibleHandler}>
          <BackIcon color='white' size={30} />
        </Pressable>
        <TrackList audioFiles={audioFiles} />
      </View>
    </Modal>
  )
}

export default ModalListQueue

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  back: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 1000,
    width: 50,
    height: 50,
  },
  backText: {
    color: 'white',
  }

})