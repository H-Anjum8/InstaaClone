import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Platform
} from 'react-native';

import Header from '../../components/Header';
import Stories from '../../components/Stories';
import Post from '../../components/Post';

const Dashboard = () => {
  return (
    <View style={styles.container}>
    
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Header />
          <Stories />
          <Post />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow', // Ensure base color matches status bar
  },
  statusBarAndroid: {
    height: StatusBar.currentHeight,
    backgroundColor: 'gray',
  },
  statusBarIOS: {
    height: 44, // Approximate height for iOS notch
    backgroundColor: 'yellow',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    paddingBottom: 20,
  },
});
