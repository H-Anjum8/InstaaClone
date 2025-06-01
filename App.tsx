import { enableScreens } from 'react-native-screens';

enableScreens();
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import StackNavigation from './src/navigator/StackNavigation'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <>
        <StatusBar
        backgroundColor="blue" // Set your desired background color
        barStyle="dark-content" // Choose 'light-content' for white icons or 'dark-content' for dark icons
        translucent={false} // Set to true if you want it to be translucent (usually for Android)
      />
      <NavigationContainer>
        <StatusBar
    barStyle="light-content"
    backgroundColor="#000"
    translucent={false}
  />
        <StackNavigation />

      </NavigationContainer>
    </>




  )
}

export default App

const styles = StyleSheet.create({})