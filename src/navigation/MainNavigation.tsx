import React from 'react'

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';

const MainNavigation = () => {

    return (
        <NavigationContainer>

            <TabNavigator />

        </NavigationContainer>
    )
}

export default MainNavigation;