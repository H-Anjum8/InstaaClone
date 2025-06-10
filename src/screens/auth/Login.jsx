import { Image, Modal, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Formik } from 'formik'
import { loginInitialValues, userValidationSchema } from './utils'
import InputBox from '../../components/InputBox'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';
import ErrorModal from '../../components/ErrorModal'

const Login = () => {
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showLanguageModal, setShowLanguageModal] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English (US)');

    const languages = [
        'English (US)',
        'Afrikaans',
        'Bahasa Indonesia',
        'Bahasa Melayu',
        'Dansk',
        'Deutsch',
        'English (UK)',
        'Español',
        
        
    ];

    return (
        <>
            <View style={{ flex: 1, paddingVertical: 20, alignItems: 'center', justifyContent: "space-between" }}>
                <TouchableOpacity style={{ position: 'absolute', top: 20, left: 20 }}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>

                {/* Language Selector Button */}
                <TouchableOpacity
                    style={styles.languageButton}
                    onPress={() => setShowLanguageModal(true)}
                >
                    <Text style={styles.languageText}>{selectedLanguage}</Text>
                    <Ionicons name="chevron-down" size={16} color="black" />
                </TouchableOpacity>

                <View style={{ marginHorizontal: 40 }}>
                    <View style={styles.imgcontainer}>
                        <Image style={styles.img} source={require("../../assets/Instalogo.png")} />
                    </View>

                    <Formik
                        initialValues={loginInitialValues}
                        validationSchema={userValidationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            navigation.navigate('Dashboard');
                            console.log('Form submitted successfully', values);
                            setSubmitting(false);
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
                            const handleLogin = () => {
                                if (!isValid) {
                                    const errorMessages = Object.values(errors).join('\n'); // Combine all errors into one string
                                    setErrorMessage(errorMessages);
                                    setShowModal(true);
                                } else {
                                    handleSubmit();
                                }
                            };

                            return (
                                <View style={{ position: 'relative' }}>
                                    <InputBox
                                        placeholder={'username, email, or mobile number'}
                                        onChangeText={handleChange('username')}
                                        onBlur={handleBlur('username')}
                                        value={values.username}
                                    />
                                    <InputBox
                                        placeholder={'Password'}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        securityTextEntry={!showPassword}
                                    />
                                    <TouchableOpacity
                                        onPress={() => setShowPassword(prev => !prev)}
                                        style={{
                                            position: 'absolute',
                                            right: 10,
                                            top: '42%',
                                            zIndex: 1
                                        }}
                                    >
                                        <Ionicons
                                            name={showPassword ? 'eye-off' : 'eye'}
                                            size={20}
                                            color="gray"
                                        />
                                    </TouchableOpacity>
                                    <CustomButton btnTitle={'Log in'} onPress={handleLogin} />

                                    <TouchableOpacity onPress={() => navigation.navigate('ResetPasswordEmail')}>
                                        <Text style={styles.password}>Forgot password?</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                    </Formik>
                </View>

                <View style={{marginTop:110}}>
                    <CustomButton btnTitle={'Create New Account'} onPress={() => navigation.navigate('SignupWithNumber')} type={true} />
                    <TouchableOpacity style={styles.metacontainer}>
                        <Image style={styles.metaimg} source={require("../../assets/meta.png")} />
                        <Text style={{ color: 'black', fontSize: 12, alignSelf: 'center' }}>Meta</Text>
                    </TouchableOpacity>
                </View>

                {/* Error Modal */}
                <ErrorModal showModal={showModal} errorMessage={errorMessage} setShowModal={setShowModal} />

                {/* Language Selection Modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showLanguageModal}
                    onRequestClose={() => setShowLanguageModal(false)}
                >
                    <View style={styles.languageModalOverlay}>
                        <View style={styles.languageModalContainer}>
                            <View style={styles.dragIndicator} />
                            <TouchableOpacity style={styles.closeButton} onPress={() => setShowLanguageModal(false)}>
                                <Ionicons name="close" size={26} color="#000" />
                            </TouchableOpacity>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <Text style={styles.languageModalTitle}>Select your language</Text>
                                <View style={styles.languageList}>
                                    {languages.map((language) => (
                                        <TouchableOpacity
                                            key={language}
                                            style={styles.languageItem}
                                            onPress={() => {
                                                setSelectedLanguage(language);
                                                setShowLanguageModal(false);
                                            }}
                                        >
                                            <Text style={styles.languageItemText}>{language}</Text>
                                            <View style={styles.checkboxContainer}>
                                                <View style={[
                                                    styles.checkbox,
                                                    selectedLanguage === language && styles.checkboxSelected
                                                ]}>
                                                    {selectedLanguage === language && (
                                                        <Ionicons name="checkmark" size={12} color="white" />
                                                    )}
                                                </View>
                                            </View>

                                        </TouchableOpacity>
                                    ))}
                                </View></ScrollView>

                        </View>
                    </View>

                </Modal>
            </View>
        </>
    )
}

export default Login;

const styles = StyleSheet.create({
    imgcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120,
        marginBottom: 50
    },
    img: {
        width: 90,
        height: 90,
    },
    password: {
        marginTop: 10,
        alignSelf: 'center'
    },
    metacontainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        
    },
    metaimg: {
        width: 26,
        height: 26,
        marginRight: 8
    },
    modalOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },

    bottomSheet: {
        height: '70%',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        position: 'relative',
        backgroundColor:'red'
    },

    dragIndicator: {
        width: 40,
        height: 5,
        backgroundColor: '#ccc',
        borderRadius: 3,
        alignSelf: 'center',
        marginBottom: 1,
    },

    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    modalMessage: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 20,
        textAlign: 'center'
    },
    modalButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8
    }, flex: 1,

    languageButton: {
        position: 'absolute',
        top: 60,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,

    },
    languageText: {
        marginRight: 4,
        fontSize: 14,
        color: 'gray'
    },
    languageModalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
         justifyContent: 'flex-end',
    },
    languageModalContainer: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingBottom: 10,
        paddingVertical:10,
        maxHeight: '70%'
    },
    languageModalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        padding: 6,
        marginVertical: 10,

    },
    languageList: {
        borderWidth: 2,
        borderRadius: 10,
        marginHorizontal:6,
        borderColor: '#eee',

    },
    languageItem: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    languageItemText: {
        fontSize: 16,
        marginLeft: 12
    },
    checkboxContainer: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkbox: {
        width: 18,
        height: 18,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkboxSelected: {
        backgroundColor: '#007BFF',
        borderColor: '#007BFF'
    },
    languageModalCloseButton: {
        padding: 16,
        alignItems: 'center'
    },
    languageModalCloseText: {
        color: '#007BFF',
        fontSize: 16,
        fontWeight: 'bold'
    }


});