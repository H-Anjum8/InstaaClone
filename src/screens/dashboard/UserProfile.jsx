import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';


import ProfileHeader from '../../components/ProfileHeader';
import ProfilePost from '../../components/ProfilePost';
import ProfileDetails from '../../components/ProfileDetails';
import BottomTabView from '../../components/BottomTabView';
import { UserData } from '../../utils/UserData';
import { useNavigation } from '@react-navigation/native';
<<<<<<< HEAD
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
      


=======

const UserProfile = () => {
    const navigation = useNavigation()
    let circuls = [];
    let numberofcircels = 10;

    for (let index = 0; index < numberofcircels; index++) {
        circuls.push(
            <View key={index}>
                {index === 0 && (
                    <View
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 100,
                            borderWidth: 1,
                            opacity: 0.7,
                            marginHorizontal: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Entypo name="plus" style={{ fontSize: 40, color: 'black' }} />
                    </View>
                )}
            </View>,
        );
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ProfileHeader />
            <ProfileDetails />
            {/* <ProfilePost /> */}
            <View style={{
                padding: 10,

            }}>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                    }}>
                    {circuls}
                    {UserData.map((item, index) => {
                        console.log('userdata', item);
                        return (
                            <View key={index} style={{ marginLeft: 8 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('StoryView', { item })}>
                                    <View style={styles.storyOutline}>
                                        <Image style={styles.imgstyle} source={item.story.image} />
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ textAlign: 'center', fontSize:10, width:40, marginLeft:6 }}>{item.story.title}</Text>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
            <BottomTabView />
        </View>
>>>>>>> ae3066ed969f62ff9f7a4f3c1c60eef0845e1751
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
<<<<<<< HEAD
        resizeMode: 'cover'
=======
        resizeMode:'cover'
>>>>>>> ae3066ed969f62ff9f7a4f3c1c60eef0845e1751
    },
    addIcon: {
        position: 'absolute',
        bottom: 0,
        right: -5,
        backgroundColor: '#fff',
        borderRadius: 12,
    },
});
