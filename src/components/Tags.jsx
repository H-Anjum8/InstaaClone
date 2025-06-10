import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tags = () => {
    const screenHeight = Dimensions.get('window').height;
    
    return (
        <View style={[styles.container, { height: screenHeight * 0.50 }]}>
            <MaterialCommunityIcons
                name="account-box-outline"
                size={30}
                style={{ marginTop: 6 }}
            />
            <Text style={styles.Title}>
                Photos and videos of you
            </Text>
            <Text style={styles.description}>
                When people tag you in photos and videos, they will appear here
            </Text>
        </View>
    )
}

export default Tags

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'start',
        marginTop:80,
        padding:50,
        width:'100%',
        marginTop:100
    
    },
    Title: {
        fontSize: 20,
        fontWeight: '700', 
        textAlign: 'center', 
        marginVertical: 8, 
        width:140
        
    },
    description: {
        fontSize: 14,
        fontWeight: '300', 
        textAlign: 'center',
         width:200 
        
    }
})