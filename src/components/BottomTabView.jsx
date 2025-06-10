import React from 'react';
<<<<<<< HEAD
import { View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { UserData } from '../utils/UserData';
import VideoPlayer from 'react-native-video';
import Tags from './Tags';

const Tab = createMaterialTopTabNavigator();
const screenHeight = Dimensions.get('window').height;

const BottomTabView = () => {
    const renderPosts = () => {
        return UserData.map((user, index) => (
            <View key={index} style={styles.postContainer}>
                <Image source={user.post.image} style={styles.postImage} />
            </View>
        ));
    };

    const renderVideos = () => {
        return UserData.filter(user => user.post?.reel).map((user, index) => (
            <View key={index} style={styles.postContainer}>
                <VideoPlayer
                    source={{ uri: user.post.reel }}
                    style={styles.postImage}
                    resizeMode="cover"
                    repeat
                    muted
                    paused={false}
                />
            </View>
        ));
    };

    const PostsTab = () => (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.gridContainer}>{renderPosts()}</View>
        </ScrollView>
    );

    const VideoTab = () => (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.gridContainer}>{renderVideos()}</View>
        </ScrollView>
    );

    const TagsTab = () => (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.gridContainer}>
                <Tags />
            </View>
        </ScrollView>
    );

    return (
        <View style={{ height: screenHeight * 0.8 }}>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarIndicatorStyle: { backgroundColor: 'black', height: 1.5 },
                }}
            >
                <Tab.Screen
                    name="Posts"
                    component={PostsTab}
                    options={{
                        tabBarIcon: () => (
                            <MaterialCommunityIcons name="grid" size={22} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Video"
                    component={VideoTab}
                    options={{
                        tabBarIcon: () => (
                            <Image
                                style={styles.iconeSize}
                                source={require('../assets/footer/reel.png')}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Tags"
                    component={TagsTab}
                    options={{
                        tabBarIcon: () => (
                            <MaterialCommunityIcons
                                name="account-box-outline"
                                size={30}
                                style={{ marginTop: 6 }}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </View>
=======
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';

const BottomTabView = () => {
    const Tab = createMaterialTopTabNavigator();

    let squares = [];
    let numberOfSquare = 7;

    for (let index = 0; index < numberOfSquare; index++) {
        squares.push(
            <View key={index}>
                <View
                    style={{
                        width: 130,
                        height: 150,
                        marginVertical: 0.5,
                        backgroundColor: 'black',
                        opacity: 0.1,
                    }}></View>
            </View>,
        );
    }

    const Posts = () => {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    width: '100%',
                    height: '100%',
                }}>
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        paddingVertical: 5,
                        justifyContent: 'space-between',
                    }}>
                    {squares}
                </View>
            </ScrollView>
        );
    };
    const Video = () => {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    width: '100%',
                    height: '100%',
                }}>
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        paddingVertical: 5,
                        justifyContent: 'space-between',
                    }}>
                    {squares}
                </View>
            </ScrollView>
        );
    };
    const Tags = () => {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    width: '100%',
                    height: '100%',
                }}>
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        paddingVertical: 5,
                        justifyContent: 'space-between',
                    }}>
                    {squares}
                </View>
            </ScrollView>
        );
    };

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarIndicatorStyle: {
                    backgroundColor: 'black',
                    height: 1.5,
                },
                tabBarIcon: ({ focused, colour }) => {
                    let iconName;
                    if (route.name === 'Posts') {
                        iconName = focused ? 'ios-apps-sharp' : 'ios-apps-sharp';
                        colour = focused ? 'black' : 'gray';
                    } else if (route.name === 'Video') {
                        iconName = focused ? 'ios-play-circle' : 'ios-play-circle-outline';
                        colour = focused ? 'black' : 'gray';
                    } else if (route.name === 'Tags') {
                        iconName = focused ? 'ios-person' : 'ios-person-outline';
                        colour = focused ? 'black' : 'gray';
                    }

                    return <Ionic name={iconName} color={colour} size={22} />;
                },
            })}>
            <Tab.Screen name="Posts" component={Posts} />
            <Tab.Screen name="Video" component={Video} />
            <Tab.Screen name="Tags" options={{
                tabBarIcon: ({ focused }) => (
                    <Image style={styles.iconeSize} source={focused ? require('../assets/footer/sHomeButton.png') : require('../assets/footer/homeButton.png')} />
                )
            }} component={Tags} />
        </Tab.Navigator>
>>>>>>> ae3066ed969f62ff9f7a4f3c1c60eef0845e1751
    );
};

export default BottomTabView;

const styles = StyleSheet.create({
<<<<<<< HEAD
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 5,
        backgroundColor: 'white',
    },
    postContainer: {
        width: '32%',
        aspectRatio: 1,
        marginBottom: 5,
    },
    postImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 5,
    },
    iconeSize: {
        height: 24,
        width: 28,
        resizeMode: 'contain',
        marginTop: 8,
    },
});
=======

  iconeSize: {

    height: 24,
    width: 28,
    resizeMode: 'contain',
    paddingHorizontal: 6,
    marginTop: 8,

  },

})
>>>>>>> ae3066ed969f62ff9f7a4f3c1c60eef0845e1751
