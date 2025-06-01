import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import Signup from '../screens/auth/Signup';
import Login from '../screens/auth/Login';
import StoryView from '../components/StoryView';
import BottomNavigation from './BottomNavigation';
import { StatusBar } from 'react-native';

const Stack =  createNativeStackNavigator();

const StackNavigation = () => {
  return (
 
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Dashboard"
          component={BottomNavigation}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="StoryView"
          component={StoryView }
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    
  );
};

export default StackNavigation;