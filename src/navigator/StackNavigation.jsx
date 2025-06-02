import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import StoryView from '../components/StoryView';
import BottomNavigation from './BottomNavigation';
import ForgotPassword from '../screens/auth/ForgotPassword';
import SignupWithEmail from '../screens/auth/SignupWithEmail';
import SignupWithNumber from '../screens/auth/SignupWithNumber';

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
          name="SignupWithEmail"
          component={SignupWithEmail}
          options={{ headerShown: false }} 
        />
          <Stack.Screen
          name="SignupWithNumber"
          component={SignupWithNumber}
          options={{ headerShown: false }} 
        />
        
        <Stack.Screen
          name="StoryView"
          component={StoryView }
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword }
          options={{ headerShown: false }} 
        />
        
      </Stack.Navigator>
    
  );
};

export default StackNavigation;