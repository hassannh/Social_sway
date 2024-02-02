import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import DrawNavigation from './DrawNavigation'
import Favorise from '../components/Favorise'


const tab = createBottomTabNavigator()

const TabBar = () => {
    return (
        <tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: 'orange' } }}>
            <tab.Screen name='Draw'
                component={DrawNavigation}
                options={{
                    tabBarActiveTintColor: 'red',
                    title: 'Home', headerShown: false,
                    tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold', padding: 5 }
                }} />
            <tab.Screen name='Favorise' component={Favorise}
                options={{
                    tabBarActiveTintColor: 'red',
                    tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold', padding: 5 },
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name='heart' color={color} size={25} />
                    )
                }} />

        </tab.Navigator>
    )
}

export default TabBar