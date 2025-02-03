import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../home/Home';
import Login from '../login/Login';
import UserDetails from '../UserDetails/UserDetails';

const Stack = createStackNavigator();

export default function Navigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
