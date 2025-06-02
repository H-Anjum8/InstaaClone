import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Formik } from 'formik'
import { signupInitialValues, signupValidationSchema, } from './utils'
import InputBox from '../../components/InputBox'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { AppColor } from '../../utils/AppColors'



const SignupWithEmail = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.headingText}>What's your Email</Text>
                <Text style={styles.subtext}>Enter the mobemail where you can be contacted.No one will see this on your profile</Text>
                <Formik
                    initialValues={signupInitialValues}
                    validationSchema={signupValidationSchema}
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
                    }) => (
                        <View>
                            <InputBox
                                placeholder={'Email'}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                touched={touched.email}
                                errors={errors.email}
                                keyboardType="email-address" 
                                autoCapitalize="none"       
                                autoCorrect={false}
                            />
                           
                            <CustomButton btnTitle={'Next'} onPress={handleSubmit} disabled={!isValid} />
                            <CustomButton btnTitle={'Sign up with mobile number'} onPress={()=>navigation.navigate('SignupWithNumber')} disabled={!isValid} bgcolor={true} />
                        </View>
                    )}
                </Formik>

            </View>

            <View style={styles.signupText}>
                <TouchableOpacity onPress={() => { navigation.navigate('Login') }} >
                    <Text style={{ color: AppColor.button, paddingBottom: 30, fontSize: 20, }}>
                        Find my account
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default SignupWithEmail

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        fontSize: 70,
        marginHorizontal: 10,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    headingText: {
        fontSize: 40,
        fontWeight: 400,
        marginBottom: 10,
        alignItems: 'center',

    },
    subtext: {
        fontSize: 20,
        marginBottom: 10

    },
    subtext2: {
        fontSize: 16,
        marginBottom: 20,
        marginHorizontal: 6,
    },

})