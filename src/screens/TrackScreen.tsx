import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TracksSlice from '@/features/TracksSlice'
import TrackList from '@/components/TrackList'

type Props = {}

const TrackScreen = (props: Props) => {
  return (
    <View>
      <TrackList/>
    </View>
  )
}

export default TrackScreen

const styles = StyleSheet.create({})