import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from '../screens/dashboard/Dashboard'
import Search from '../screens/dashboard/Search'
import AddPost from '../screens/dashboard/AddPost'
import UserProfile from '../screens/dashboard/UserProfile'
import Reels from '../screens/dashboard/Reels'

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, }} >
      <Tab.Screen name='Home' component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image style={styles.iconeSize} source={focused ? require('../assets/footer/sHomeButton.png') : require('../assets/footer/homeButton.png')} />
          )
        }} />
      <Tab.Screen name='Search' component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image style={styles.iconeSize} source={focused ? require('../assets/footer/sSearch.png') : require('../assets/footer/search.png')} />
          )
        }} />

      <Tab.Screen name='AddPost' component={AddPost}
        options={{
          tabBarIcon: () => (
            <Image style={styles.iconeSize} source={require('../assets/footer/addPost.png')} />
          )
        }} />
      <Tab.Screen name='Reels' component={Reels}
        options={{
          tabBarIcon: () => (
            <Image style={styles.iconeSize} source={require('../assets/footer/reel.png')} />
          )
        }} />
      <Tab.Screen name='UserProfile' component={UserProfile}
        options={{
          tabBarIcon: () => (
            <Image style={styles.iconeSize} source={require('../assets/footer/user.png')} />
          )
        }} />
    </Tab.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({
  iconeSize: {
    height: 30,
    width: 30
  }
})