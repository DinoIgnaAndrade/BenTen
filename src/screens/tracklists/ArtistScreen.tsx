import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
//Components
import TrackList from '@/components/TrackList'
//Assets
import backgrounds from '@/global/background';
//Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/ReduxHooks';
//Redux
import { setTracksByArtist } from '@/features/TracksSlice';
//Types
import { MediaData } from '@/types/Types';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ArtistScreen = () => {
  const dispatch = useAppDispatch()
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const [bckgnd, setBckgnd] = useState(backgrounds[randomIndex]);
  const[showTrack, setShowTrack] = useState(false)

  const artists: string[] = useAppSelector((state) => state.trackList.artists);
  const artist: string = useAppSelector((state) => state.trackList.artist);
  const tracks: MediaData[] = useAppSelector((state) => state.trackList.tracksByArtist);

  useEffect(() => {
    if (artist) {
      setShowTrack(true)
      dispatch(setTracksByArtist());
    }
  },[artist])

  return (
    <View>
      <Image source={bckgnd} style={styles.background} />
      {
        showTrack
        ?
        (<TrackList audioFiles={tracks} />)
        :
        (<TrackList category='artist' text={artists} />)
      }
    </View>
  )
}

export default ArtistScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
    resizeMode: 'cover',
  }
})