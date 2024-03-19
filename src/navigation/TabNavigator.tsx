import React from 'react'

//Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Screens
import TrackList from '../components/TrackList';
import PlayerScreen from '../screens/PlayerScreen';

const Tab = createBottomTabNavigator()
const TabNavigator = () => {

    return (
        <Tab.Navigator
            screenOptions={{ 
                headerShown: false,
                tabBarStyle: { backgroundColor: '#000' },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
             }}
        >

            <Tab.Screen
                name="TrackList"
                component={TrackList} />

            <Tab.Screen
                name="PlayerScreen"
                component={PlayerScreen} />
                

        </Tab.Navigator>
    )
}

export default TabNavigator