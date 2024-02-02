import { View, Text } from 'react-native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../components/Home'
import Faq from '../components/Faq'


const Drawer = createDrawerNavigator()

const DrawNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Accueil' component={Home} />
      <Drawer.Screen name='Faq' component={Faq} />
    </Drawer.Navigator>
  )
}

export default DrawNavigation