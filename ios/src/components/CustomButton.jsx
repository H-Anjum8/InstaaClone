import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppColor } from '../utils/AppColors'

const CustomButton = ({ btnTitle, onPress, disabled }) => {
   const dynamicBtnStyle = {
    backgroundColor: disabled ? AppColor.disable_button : AppColor.button,
  }
  return (
    <View>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <View style={[styles.btnContainer, dynamicBtnStyle]}>
          <Text style={styles.btn} >{btnTitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  btnContainer: {
   
    width: 350,
    height: 50
  },
  btn: {

    paddingVertical: 10,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 5

  }
})