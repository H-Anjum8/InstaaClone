import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Formik } from 'formik'
import {signupInitialValues, signupValidationSchema, } from './utils'
import InputBox from '../../components/InputBox'
import CustomButton from '../../components/CustomButton'



const Signup = () => {
    // const navigation = useNavigation();
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.headingText}>SignUp with your mobile Number</Text>

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
                                placeholder={'Number'}
                                onChangeText={handleChange('number')}
                                onBlur={handleBlur('number')}
                                value={values.number}
                                touched={touched.number}
                                errors={errors.number}
                                keyboardType="numeric"
                                maxLength={11}
                            />
                            <CustomButton btnTitle={'SignUp'} onPress={handleSubmit} disabled={!isValid} />
                        </View>
                    )}
                </Formik>
            </View>

            <View style={styles.signupText}>
                <TouchableOpacity  >
                    <Text style={{ color: 'black', paddingBottom: 60, fontSize: 20, }}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Signup

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        fontSize: 70,
        marginTop: 200,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headingText: {
        fontSize: 20,
        fontWeight: 400,
        marginBottom: 10,
        alignItems: 'center',

    }

})