import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Drawer, Switch, TouchableRipple, Button } from 'react-native-paper'
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import usePrefences from '../hooks/usePrefences'
import { styles } from '../theme/appTheme'

const DrawerContent = ({navigation}: DrawerContentComponentProps) => {
    
    const [activation, setActivation] = useState("home")
    const {theme, toggleTheme} = usePrefences()


    const onChangeScreen = (screen: string) => {
        navigation.navigate(screen)
        setActivation(screen)
    }


    return (
        <DrawerContentScrollView>
            <Drawer.Section>
                <Drawer.Item 
                    label="Inicio" 
                    active={activation === 'home' && true}
                    onPress={() => onChangeScreen('home')}
                />
                <Drawer.Item 
                    label="Peliculas populares" 
                    active={activation === 'popular' && true}
                    onPress={() => onChangeScreen('popular')} 
                />
                <Drawer.Item 
                    label="Nuevas Peliculas" 
                    active={activation === 'news' && true}
                    onPress={() => onChangeScreen('news')} 
                />
            </Drawer.Section>
            <Drawer.Section title="Opciones">
                <TouchableRipple>
                    <View style={styles.preferences}>
                        <Text>Tema Oscuro</Text>
                        <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
                    </View>
                </TouchableRipple>
            </Drawer.Section>
        </DrawerContentScrollView>
    )
}

export default DrawerContent
