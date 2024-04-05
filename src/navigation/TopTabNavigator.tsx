import React from 'react'
//Navigation
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
//Screens
import TrackScreen from '@/screens/tracklists/TrackScreen'
import ArtistScreen from '@/screens/tracklists/ArtistScreen'
import AlbumScreen from '@/screens/tracklists/AlbumsScreen'
import GenreScreen from '@/screens/tracklists/GenreScreen'
import { setGenres } from '@/features/TracksSlice'


const TopTabNavigator = () => {

    const Tab = createMaterialTopTabNavigator()

  return (
    <Tab.Navigator>
        <Tab.Screen name="All" component={TrackScreen} />
        <Tab.Screen name="Artist" component={ArtistScreen} />
        <Tab.Screen name="Album" component={AlbumScreen} />
        <Tab.Screen name="Genre" component={GenreScreen} />
    </Tab.Navigator>
  )
}

export default TopTabNavigator