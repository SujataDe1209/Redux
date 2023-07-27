import { View, Text } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './Dashboard';
import Login from './Login';
const Stack = createStackNavigator();

const MainRoute = () => {
  return (
    <Stack.Navigator>

        {
            true?
            <Stack.Screen name="login" component={Login} />
            :
            <Stack.Screen name="dashboard" component={Dashboard} />
        }
        
   
    
    
  </Stack.Navigator>
  )
}

export default MainRoute