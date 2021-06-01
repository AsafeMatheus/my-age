import React from 'react'
import HomeScreen from './screens/Home'
import Response from './screens/Response'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Response'
        component={Response}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}