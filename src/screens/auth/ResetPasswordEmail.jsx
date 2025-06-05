import { Modal, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Formik } from 'formik'
import { signupeEmailInitialValues, signupEmailValidationSchema, signupInitialValues, signupValidationSchema, } from './utils'
import InputBox from '../../components/InputBox'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { AppColor } from '../../utils/AppColors'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react'

const ResetPasswordEmail = () => {
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
          Enter your email or username
        </Text>
        <View style={styles.Text}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={{ color: AppColor.button, paddingBottom: 20, fontSize: 14 }}>
              Can't reset your password?
            </Text>
          </TouchableOpacity>
        </View>

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
                placeholder={'Email or username'}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                touched={touched.email}
                errors={errors.email}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Text style={styles.subtext2}>
                You may receive WhatsApp and SMS notifications from us for security and login purposes.
              </Text>
              <CustomButton btnTitle={'Continue'} onPress={handleSubmit} disabled={!isValid} />
              <CustomButton
                btnTitle={'Search by mobile number instead'}
                onPress={() => navigation.navigate('ResetPasswordNumber')}
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
              <Ionicons name="close" size={26} color="#000" />
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

export default ResetPasswordEmail

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
    
  },
  subtext2: {
    fontSize: 14,
    marginBottom: 20,
    marginHorizontal: 6,
    color:'#777777'
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
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 1,
  },

  closeButton: {
    position: 'absolute',
    left: 20,
    top: 40,
    
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: 500,
    marginTop: 50,
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