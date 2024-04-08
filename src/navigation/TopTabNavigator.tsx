import React from 'react'
//Navigation
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
//Screens
import TrackScreen from '@/screens/tracklists/TrackScreen'
import ArtistScreen from '@/screens/tracklists/ArtistScreen'
import AlbumScreen from '@/screens/tracklists/AlbumsScreen'
import GenreScreen from '@/screens/tracklists/GenreScreen'
//Icons
import ArtistIcon from '@/components/svg/tracklistJcon/ArtistIcon'
import AlbumIcon from '@/components/svg/tracklistJcon/AlbumIcon'
import GenreIcon from '@/components/svg/tracklistJcon/GenreIcon'
import PlaylistIcon from '@/components/svg/tracklistJcon/PlaylistIcon'


const TopTabNavigator = () => {

  const Tab = createMaterialTopTabNavigator()

  return (
    <Tab.Navigator
      initialRouteName="All"
      screenOptions={{
        tabBarStyle: { backgroundColor: '#000' },
        tabBarActiveTintColor: '#edb347',
        tabBarInactiveTintColor: '#1e5d78',
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Tab.Screen
        name="All"
        component={TrackScreen}
        options={{
          tabBarIcon: ({ color }) => <PlaylistIcon size={55} color={color} />
        }} />

      <Tab.Screen
        name="Artist"
        component={ArtistScreen}
        options={{
          tabBarIcon: ({ color }) => <ArtistIcon size={55} color={color} />
        }}
      />

      <Tab.Screen
        name="Album"
        component={AlbumScreen}
        options={{
          tabBarIcon: ({ color }) => <AlbumIcon size={55} color={color} />
        }}
      />

      <Tab.Screen
        name="Genre"
        component={GenreScreen}
        options={{
          tabBarIcon: ({ color }) => <GenreIcon size={55} color={color} />
        }}
      />

    </Tab.Navigator>
  )
}

export default TopTabNavigator