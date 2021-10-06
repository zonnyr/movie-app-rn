import React, { useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import StackNavigation from './StackNavigation'
import { IconButton } from 'react-native-paper'
import DrawerContent from './DrawerContent'

const Drawer = createDrawerNavigator()

const Navigation = () => {

    return (
        <Drawer.Navigator
            initialRouteName="app"
            screenOptions={{
                headerShown: false
            }}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen name="app" component={StackNavigation} />
        </Drawer.Navigator>
    )
}

export default Navigation
