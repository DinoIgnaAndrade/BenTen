import React, { useEffect, useState } from 'react';
import {Image, View} from 'react-native';
//Icons
import VinylIcon from '@/components/svg/VinylIcon'; 
import HeartIcon from '@/components/svg/HeartIcon';
//Redux
import { useAppSelector } from '@/hooks/ReduxHooks';
//Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//Screens
import TrackScreen from '../screens/tracklists/TrackScreen';
import PlayerScreen from '../screens/PlayerScreen';
import PlaylistScreen from '../screens/PlaylistScreen';
//Navigator
import TopTabNavigator from './TopTabNavigator';
//Assets
import coverImage from '../global/cover';

const Tab = createBottomTabNavigator()

const TabNavigator = () => {

    const randomIndex = Math.floor(Math.random() * coverImage.length);
    const [iconPlayer, setIconPlayer] = useState(coverImage[randomIndex]);

    //Redux
    const picture = useAppSelector(state => state.player.picture);

    //Seteo de icono
    useEffect(() => {
        try{
          if(picture !== undefined){
            //@ts-ignore
            const filePicture = picture.pictureData;
            setIconPlayer({uri: filePicture});
          }
        }catch(error){
            setIconPlayer(coverImage[randomIndex]);
            console.log(error);
        }
      },[picture]);

    return (
        <Tab.Navigator
            initialRouteName="PlaylistScreen"
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: '#000' },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
            }}>

            <Tab.Screen
                name="TrackList"
                component={TopTabNavigator}
                options={{ tabBarIcon: ({ color }) =>  <View style={{ alignContent: 'center', justifyContent: 'center'}}><VinylIcon  size={55} color={color} /></View> }} />

            <Tab.Screen
                name="PlaylistScreen"
                component={PlayerScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={iconPlayer}
                            style={[
                                {borderRadius: 100, resizeMode: 'cover', transform: [{ translateY: -20 },] },
                                focused ? { width: 60, height: 60 } : {width: 100, height: 100}
                              ]}
                        />)
                }} />

            <Tab.Screen
                name="PlayerScreen"
                component={PlaylistScreen}
                options={{ tabBarIcon: ({ color }) => <View style={{ alignContent: 'center', justifyContent: 'center'}}><HeartIcon size={35} color={color} /></View> }} />


        </Tab.Navigator>
    )
}

export default TabNavigator