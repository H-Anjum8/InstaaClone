import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Image style={styles.logo} source={require('../assets/Instagram.png')} />
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.like}>
          <Image style={styles.likeimg} source={require('../assets/Like.png')} />
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.massenger1}>
            <Image style={styles.massenger2} source={require('../assets/Message.png')} />
            <View style={styles.mesgcount1}>
              <Text style={styles.mesgcount2}>
                5
              </Text>

            </View>
          </View>

        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    marginTop: 10

  },
  logo: {
    height: 28,
    width: 110,
    resizeMode: 'contain',
  },
  container: {
    flexDirection: 'row',

  },
  like: {
    marginRight: 10,

  },
  likeimg: {
    height: 25,
    resizeMode: 'contain',
    width: 25,


  },
  massenger1: {
    position: 'relative'
  },
  massenger2: {
    height: 24,
    width: 24
  },
  mesgcount1: {
    position: 'absolute',
    bottom: 13,


  },
  mesgcount2: {
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 10,
    paddingHorizontal: 6,
    left: 12,
  }





})