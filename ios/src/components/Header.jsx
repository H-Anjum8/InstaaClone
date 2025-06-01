import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
         <Text> header</Text>
        {/* <Image style={styles.logoimg} source={require('../assets/logo.jfif')} /> */}
      </View>
      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({

    mainContainer:{
        paddingHorizontal:15,
        height:50,
        alignItems:"center",
        flexDirection:'row',
        justifyContent:'space-between'
    },
    logoimg:{
      height:28,
      width:110

    }
})