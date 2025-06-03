import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Formik } from 'formik';
import { signupeNumberInitialValues, signupInitialValues, signupNumberValidationSchema, signupValidationSchema } from './utils';
import InputBox from '../../components/InputBox';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { AppColor } from '../../utils/AppColors';

const SignupWithNumber = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
     
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={20} color="black" marginRight="6" />
          </TouchableOpacity>
          <Text style={styles.headingText}>What's your mobile Number</Text>
          <Text style={styles.subtext}>
            Enter the mobile number where you can be contacted. No one will see this on your profile
          </Text>
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
                <CustomButton btnTitle={'Next'} onPress={handleSubmit} disabled={!isValid} />
                <CustomButton
                  btnTitle={'Sign up with Email'}
                  onPress={() => navigation.navigate('SignupWithEmail')}
                
                  bgcolor={true}
                />
              </View>
            )}
          </Formik>
        </View>

        <View style={styles.signupText}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={{ color: AppColor.button, paddingBottom: 30, fontSize: 20 }}>
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

  );
};

export default SignupWithNumber;

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
  signupText: {
    alignItems: 'center',
  },

  // Modal styles
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
