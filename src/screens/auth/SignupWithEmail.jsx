import { Modal, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Formik } from 'formik'
import { signupeEmailInitialValues, signupEmailValidationSchema, signupInitialValues, signupValidationSchema, } from './utils'
import InputBox from '../../components/InputBox'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { AppColor } from '../../utils/AppColors'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react'


const SignupWithEmail = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>

            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={20} color="black" marginRight='6' />
                    </TouchableOpacity>
                    <Text style={styles.headingText}>What's your Email</Text>
                    <Text style={styles.subtext}>Enter the mobemail where you can be contacted.No one will see this on your profile</Text>
                    <Formik
                        initialValues={signupeEmailInitialValues}
                        validationSchema={signupEmailValidationSchema}
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
                                <CustomButton btnTitle={'Sign up with mobile number'} onPress={() => navigation.navigate('SignupWithNumber')} bgcolor={true} />
                            </View>
                        )}
                    </Formik>

                </View>

                <View style={styles.signupText}>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Text style={{ color: AppColor.button, paddingBottom: 30, fontSize: 14, fontWeight: 500 }}>
                            Find my account
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Custom Modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Already have an account</Text>
                            <TouchableOpacity onPress={() => { setModalVisible(false), navigation.navigate('Login') }}>
                                <Text style={styles.modalText}>Login
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity

                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.modalCloseText}>CONTINUE CREATING ACCOUNT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </>


    )
}

export default SignupWithEmail


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        fontSize: 70,
        marginHorizontal: 12,
        marginTop: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headingText: {
        fontSize: 24,
        marginTop: 12,
        fontWeight: '500',
        marginBottom: 8,
        alignItems: 'center',
    },
    subtext: {
        fontSize: 16,
        marginBottom: 16,
        color: '#2F2F2F'

    },
    subtext2: {
        fontSize: 14,
        marginBottom: 20,
        marginHorizontal: 6,
        color: '#777777'
    },
    Text: {
        alignItems: 'start',
    },

     modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 5,
    width: '85%',

  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'left',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'right',
    fontWeight: 400,
    paddingRight: 30,
    marginBottom: 20,
    color: AppColor.button
  },

  modalCloseText: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'right',

  },
});
