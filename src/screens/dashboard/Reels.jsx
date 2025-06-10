<<<<<<< HEAD

import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ReelsComponent from '../../components/ReelsComponent';


const Reels = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'white',
        position: 'relative',
        backgroundColor: 'black',
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: 1,
          padding: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          Reels
        </Text>
        <Feather name="camera" style={{fontSize: 25, color: 'white'}} />
      </View>
      {/* <ReelsComponent /> */}
    </View>
  );
};

export default Reels;
=======
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Reels = () => {
  return (
    <View>
      <Text>Reels</Text>
    </View>
  )
}

export default Reels

const styles = StyleSheet.create({})
>>>>>>> ae3066ed969f62ff9f7a4f3c1c60eef0845e1751
