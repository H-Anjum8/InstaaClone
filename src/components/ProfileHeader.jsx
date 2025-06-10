import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
<<<<<<< HEAD

=======
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
>>>>>>> ae3066ed969f62ff9f7a4f3c1c60eef0845e1751

const ProfileHeader = () => {
    return (
        <View style={{
            paddingHorizontal: 15,
            paddingTop: 10,
            height: 55,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 16,
                fontWeight: '500',
                color: 'black'
            }}>
                Hadi Anjum
            </Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
<<<<<<< HEAD
                <TouchableOpacity style={{ marginRight: 30, flexDirection: 'row', gap: 20 }}>
                    <Image
                        style={{ height: 24, width: 24, resizeMode: 'contain', color: 'black' }}
=======
                <TouchableOpacity style={{ marginRight: 30, flexDirection:'row', gap:20 }}>
                    <Image
                        style={{ height: 24, width: 24,resizeMode:'contain',  color:'black' }}
>>>>>>> ae3066ed969f62ff9f7a4f3c1c60eef0845e1751
                        source={require('../assets/thread.png')}
                    />
                    <Image
                        style={{ height: 24, width: 24 }}
                        source={require('../assets/footer/addPost.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
<<<<<<< HEAD

=======
                    
>>>>>>> ae3066ed969f62ff9f7a4f3c1c60eef0845e1751
                    <Image
                        style={{ height: 20, width: 20, tintColor: 'black' }}
                        source={require('../assets/icon/Menu.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProfileHeader;