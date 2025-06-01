import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import { loginInitialValues, userValidationSchema } from './utils'
import InputBox from '../../components/InputBox'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    // const navigation = useNavigation();
    // const handleLogin = () => {
    //     console.log(values)
    // }

    return (
        <View style={{ flex: 1, paddingVertical: 80, alignItems: 'center', justifyContent: "space-between" }}>
            <View >
                <View style={styles.img}>
                    {/* <Image source={require("../../assets/logo2.png")} /> */}
                </View>

                <Formik
                    initialValues={loginInitialValues}
                    validationSchema={userValidationSchema}
                    onSubmit={(values) => {

                        console.log('Form submitted successfully', values);
                    }}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        touched,
                        errors,
                        isValid
                    }) => {
                        return (
                            <View >
                                <InputBox
                                    placeholder={'Name'}
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username}
                                    touched={touched.username}
                                    errors={errors.username}
                                />
                                <InputBox
                                    placeholder={'Passeord'}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    touched={touched.password}
                                    errors={errors.password}
                                    securityTextEntry={true}
                                />
                                <CustomButton btnTitle={'Login'} onPress={handleSubmit} disabled={!isValid} />
                            </View>

                        )
                    }}
                </Formik>

            </View>
            <View >
                {/* onPress={() => { navigation.navigate('Signup') }} */}
                <TouchableOpacity >
                    <Text style={{ color: 'Black', fontSize:14 }}>
                        SignUp
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    img: {
        flex: 0.8,
        justifyContent: 'center',

        paddingHorizontal: 50,
        paddingVertical: 40

    },
    
})