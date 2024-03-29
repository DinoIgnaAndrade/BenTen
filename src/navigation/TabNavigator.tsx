import React, { useEffect, useState } from 'react';
import {Image} from 'react-native';

//Icons
import { EvilIcons } from '@expo/vector-icons';

//Redux
import { useAppSelector } from '@/hooks/Hooks';

//Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Screens
import TrackScreen from '../screens/TrackScreen';
import PlayerScreen from '../screens/PlayerScreen';
import PlaylistScreen from '../screens/PlaylistScreen';

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
                component={TrackScreen}
                options={{ tabBarIcon: ({ color }) => <EvilIcons name="archive" size={30} color={color} /> }} />

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
                options={{ tabBarIcon: ({ color }) => <EvilIcons name="heart" size={30} color={color} /> }} />


        </Tab.Navigator>
    )
}

export default TabNavigator