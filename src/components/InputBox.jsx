import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputBox = ({ placeholder, onBlur, onChangeText, value, touched, errors, maxLength, securityTextEntry = false }) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
        touched={touched}
        secureTextEntry={securityTextEntry}
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
    marginBottom: 6,
    alignItems: 'center'

  },
  textInput: {
    borderWidth: 1,
    height: 60,
    width: 330,
    borderColor: "#D3D3D3",
    borderRadius: 20,
    paddingHorizontal: 10,

  },
  error: {
    color: 'red'
  }
})