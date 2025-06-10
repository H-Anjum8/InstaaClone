import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppColor } from '../utils/AppColors'

const CustomButton = ({ btnTitle, onPress, disabled, type,bgcolor }) => {
    
  const dynamicBtnStyle = {
    backgroundColor: disabled
      ? AppColor.disable_button
      : type || bgcolor
      ? 'white'
      :AppColor.button ,
      borderWidth: type || bgcolor ? 1 : 0,
    borderColor: type ? AppColor.button :bgcolor? '#D3D3D3' :'transparent',
  };

  const dynamicTextStyle = {
    color: type ?AppColor.button  :bgcolor? 'black': 'white', // assuming blue is AppColor.button
  };
  return (
    <View>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <View style={[styles.btnContainer, dynamicBtnStyle]}>
          <Text style={[styles.btn, dynamicTextStyle]} >{btnTitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  btnContainer: {
    
     width:330,
    height: 45,
     borderRadius: 25,
     marginBottom:10
  },
  btn: {

    paddingVertical: 10,
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
   

  }
});