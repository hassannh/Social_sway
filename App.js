import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home'
import Like from './components/Like'
import TabBar from './navigation/TabBar';
import DrawNavigation from './navigation/DrawNavigation';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={TabBar} />
        <Stack.Screen name="Like" component={Like} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

