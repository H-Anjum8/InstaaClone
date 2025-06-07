import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppColor } from '../utils/AppColors';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
const ProfileDetails = () => {
    const ringColors = ['#f09433', '#e6683c', '#dc2743', '#cc2366', '#bc1888'];
    return (
        <View style={{ paddingHorizontal: 15 }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>

                {/* Add Your Story */}
                <View style={{ marginLeft: 8 }}>
                    <TouchableOpacity >
                        <View style={{
                            ...styles.outerRingColor,
                            borderColor: ringColors[ringColors.length], // rotates colors
                        }}>
                            <Image
                                style={styles.imgstyle}
                                source={require('../assets/data/hadidp.webp') // default image before upload
                                }
                            />
                            <View style={styles.addIcon}>
                                <Icon name="plus-circle" size={22} color={AppColor.button} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ textAlign: 'center' }}>Your Story</Text>
                </View>
                <View style={{ marginRight: 10 }}>
                    <Text >Hadi Anjum</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.counts}>
                            <Text style={styles.countnumber}>
                                4
                            </Text>
                            <Text style={styles.counttext}>
                                Posts
                            </Text>
                        </View>
                        <View style={styles.counts}>
                            <Text style={styles.countnumber}>
                                1.2 M
                            </Text>
                            <Text style={styles.counttext}>
                                Followers
                            </Text>
                        </View>
                        <View style={styles.counts}>
                            <Text style={styles.countnumber}>
                                1
                            </Text>
                            <Text style={styles.counttext}>
                                Following
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 12, color: 'black', fontWeight: '500' }}>React Native Developer</Text>
                <Text style={{ color: 'black', fontSize: 12, }}>Instagram Clone</Text>
                <Text style={{ color: 'black', fontSize: 16, fontWeight: '500', marginTop: 5 }}>See Translation</Text>
            </View>

            <View style={styles.BtnContainer}>
                <TouchableOpacity >
                    <Text
                        style={styles.btnstyle}>
                        Edit Profile
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.btnstyle}
                    >Share Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={styles.btnstyle1}>

                        <MaterialIcon name="person-add" size={24} color={AppColor.secondary} />
                    </View>

                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProfileDetails;
const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        marginTop: 8,
    },
    storyOutline: {
        borderWidth: 3,
        borderRadius: 40,
        padding: 2,
        borderColor: '#C13584',
        position: 'relative',
    },
    imgstyle: {
        height: 70,
        width: 70,
        borderRadius: 35,
    },
    addIcon: {
        position: 'absolute',
        bottom: 0,
        right: 6,
        backgroundColor: '#fff',
        borderRadius: 12,
    },
    counts: {
        width: 70, alignItems: "flex-start",
    },
    countnumber: {
        fontSize: 16,
        fontWeight: '600',
        alignItems: 'flex-start',
        color: 'black'

    },
    counttext: {
        fontSize: 12,
        color: 'black'
    },
    btnstyle: {

        backgroundColor: '#f1f2f6',
        width: 145,
        paddingHorizontal: 6,
        paddingVertical: 5,
        borderRadius: 5,
        textAlign: 'center',
        color: 'black',

    },
    btnstyle1: {
        backgroundColor: '#f1f2f6',
        
        paddingHorizontal: 6,
        paddingVertical: 5,
        borderRadius: 5,
        textAlign: 'center',
        color: 'black',
    },
    BtnContainer: {
         marginLeft:-3,
        flexDirection: 'row',
        alignItems:'center',
        gap:'4',
        marginTop: 15,
        justifyContent: 'space-between',


    }
});