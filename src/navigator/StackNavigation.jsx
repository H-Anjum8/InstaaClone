import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import StoryView from '../components/StoryView';
import BottomNavigation from './BottomNavigation';
import SignupWithEmail from '../screens/auth/SignupWithEmail';
import SignupWithNumber from '../screens/auth/SignupWithNumber';
import ResetPasswordNumber from '../screens/auth/ResetPasswordNumber';
import ResetPasswordEmail from '../screens/auth/ResetPasswordEmail';
import SearchScreenPost from '../screens/dashboard/SearchScreenPost';
import Search from '../screens/dashboard/Search';

const Stack = createNativeStackNavigator();

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
        component={StoryView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPasswordEmail"
        component={ResetPasswordEmail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPasswordNumber"
        component={ResetPasswordNumber}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchScreenPost"
        component={SearchScreenPost}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>

  );
};

export default StackNavigation;