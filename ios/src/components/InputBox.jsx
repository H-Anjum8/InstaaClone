import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputBox = ({ placeholder, onBlur, onChangeText, value, touched, secureTextEntry,errors,maxLength }) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
        touched={touched}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}

      />
      {errors && touched && <Text style={styles.error}>{errors}</Text>}
    </View>
  )
}

export default InputBox

const styles = StyleSheet.create({
  mainContainer: {
    height: 70,
  marginBottom:20

  },
  textInput: {
    borderWidth:1,
    height:60,
    width:350,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,

  },
  error:{
      color:'red'
  }
})