import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';


import ProfileHeader from '../../components/ProfileHeader';
import ProfilePost from '../../components/ProfilePost';
import ProfileDetails from '../../components/ProfileDetails';
import BottomTabView from '../../components/BottomTabView';
import { UserData } from '../../utils/UserData';
import { useNavigation } from '@react-navigation/native';
import HeighLights from '../../components/HeighLights';
import DiscoverPeople from '../../components/DiscoverPeople';

const UserProfile = () => {
  

    return (

     
            <View style={{  backgroundColor: 'white' }}>

                 <ScrollView  showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
                <ProfileHeader />
                <ProfileDetails />   
                <HeighLights />
                <DiscoverPeople />
                <BottomTabView />
                </ScrollView>
            </View>
      


    );
};

export default UserProfile;
const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        marginTop: 8,
    },
    storyOutline: {
        borderWidth: 3,
        borderRadius: 30,
        padding: 2,
        borderColor: '#f1f2f6',
        position: 'relative',
    },
    imgstyle: {
        height: 55,
        width: 55,
        borderRadius: 35,
        resizeMode: 'cover'
    },
    addIcon: {
        position: 'absolute',
        bottom: 0,
        right: -5,
        backgroundColor: '#fff',
        borderRadius: 12,
    },
});
