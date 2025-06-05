import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ErrorModal = ({ showModal, errorMessage, setShowModal }) => {
      const navigation = useNavigation();
    return (
        <View>
            <Modal visible={showModal} transparent animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>{errorMessage}</Text>
                        <View style={styles.modalMessage}>
                         <TouchableOpacity onPress={() => navigation.navigate('SignupWithEmail')} >
                            <Text style={{
                                color: 'red',
                                paddingLeft:20
                               
                            }}>CREATE NEW ACCOUNT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setShowModal(false)} >
                            <Text style={{
                                color: '#007BFF',
                                fontWeight:600,
                      
                            }}>OK</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ErrorModal

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        width: '90%',
        flexDirection:'column',
        gap:80,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
      
    },


    modalTitle: {
        fontSize: 18,
        fontWeight: 500,
        marginBottom: 10
    },
    modalMessage: {
        flexDirection:'row',
         justifyContent: 'space-between'
       
    },
  
})

