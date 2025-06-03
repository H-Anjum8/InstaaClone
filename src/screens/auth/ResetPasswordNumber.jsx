import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Formik } from 'formik';
import { signupeNumberInitialValues, signupInitialValues, signupNumberValidationSchema, signupValidationSchema } from './utils';
import InputBox from '../../components/InputBox';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { AppColor } from '../../utils/AppColors';

const ResetPasswordNumber = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={20} color="black" marginRight="6" />
                </TouchableOpacity>
                <Text style={styles.headingText}>Find your account</Text>
                <Text style={styles.subtext}>
                    Enter your mobile number
                </Text>
                <View style={styles.Text}>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Text style={{ color: AppColor.button, paddingBottom: 30, fontSize: 14 }}>
                            Can't reset your password?
                        </Text>
                    </TouchableOpacity>
                </View>
                <Formik
                    initialValues={signupeNumberInitialValues}
                    validationSchema={signupNumberValidationSchema}
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
                        isValid,
                    }) => (
                        <View>
                            <InputBox
                                placeholder={'Mobile number'}
                                onChangeText={handleChange('number')}
                                onBlur={handleBlur('number')}
                                value={values.number}
                                touched={touched.number}
                                errors={errors.number}
                                keyboardType="numeric"
                                maxLength={11}
                            />
                            <Text style={styles.subtext2}>
                                You may receive WhatsApp and SMS notifications from us for security and login purposes.
                            </Text>
                            <CustomButton btnTitle={'Continue'} onPress={handleSubmit} disabled={!isValid} />
                            <CustomButton
                                btnTitle={'Search by email instead'}
                                onPress={() => navigation.navigate('ResetPasswordEmail')}
                                bgcolor={true}
                            />
                        </View>
                    )}
                </Formik>
            </View>



            {/* Custom Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.bottomSheet}>
                        <View style={styles.dragIndicator} />

                        <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                            <Ionicons name="close" size={24} color="#000" />
                        </TouchableOpacity>

                        <Text style={styles.modalTitle}>
                            To help you find your account, we need more info
                        </Text>
                        <Text style={styles.modalText}>
                            Enter your mobile number so that we can use a secure process to help you get back in.
                        </Text>

                        <TouchableOpacity
                            style={styles.okButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.okButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ResetPasswordNumber

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
        fontWeight: '400',
        marginBottom: 10,
        alignItems: 'center',
    },
    subtext: {
        fontSize: 20,
        marginBottom: 10,
    },
    subtext2: {
        fontSize: 16,
        marginBottom: 20,
        marginHorizontal: 6,
    },
    Text: {
        alignItems: 'start',
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },

    bottomSheet: {
        height: '45%',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        position: 'relative',
    },

    dragIndicator: {
        width: 60,
        height: 5,
        backgroundColor: '#ccc',
        borderRadius: 3,
        alignSelf: 'center',
        marginBottom: 2,
    },

    closeButton: {
        position: 'absolute',
        right: 20,
        top: 20,
    },

    modalTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 10,
    },

    modalText: {
        fontSize: 16,
        color: '#555',
        marginBottom: 30,
    },

    okButton: {
        backgroundColor: AppColor.button,
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: 'center',
    },

    okButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});