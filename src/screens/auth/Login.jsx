import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Formik } from 'formik'
import { loginInitialValues, userValidationSchema } from './utils'
import InputBox from '../../components/InputBox'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
// import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation = useNavigation();
    // const handleLogin = () => {
    //     console.log(values)
    // }

    return (
        <>
       
            <View style={{ flex: 1, paddingVertical: 20, alignItems: 'center', justifyContent: "space-between" }}>

                <View >
                    <View style={styles.imgcontainer}>
                        <Image style={styles.img} source={require("../../assets/Instalogo.png")} />
                    </View>

                    <Formik
                        initialValues={loginInitialValues}
                        validationSchema={userValidationSchema}
                        onSubmit={(values) => {
                            navigation.navigate('Dashboard')
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
                                        placeholder={'username, email, or mobile number'}
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
                                    <TouchableOpacity onPress={() => navigation.navigate('ResetPasswordEmail')}>
                                        <Text style={styles.password}>Forgot password?</Text>
                                    </TouchableOpacity>
                                </View>

                            )
                        }}
                    </Formik>

                </View>
                <View >
                    <CustomButton btnTitle={'Create New Account'} onPress={() => navigation.navigate('SignupWithNumber')} type={true} />
                    <TouchableOpacity style={styles.metacontainer}>
                        <Image style={styles.metaimg} source={require("../../assets/meta.png")} />
                        <Text style={{ color: 'Black', fontSize: 14, alignSelf: 'center' }}>
                            Meta
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </>

    )
}

export default Login

const styles = StyleSheet.create({
    imgcontainer: {
        // flex: 0.2,
        justifyContent: 'start',
        alignItems: 'center',
        marginTop: 70,
        marginBottom: 50
    },
    img: {
        width: 80,
        height: 80,
    },
    password: {
        marginTop: 10,
        alignSelf: 'center'
    },
    metacontainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 8
    },
    metaimg: {
        width: 30,
        height: 30,
        marginRight: 8

    }


})