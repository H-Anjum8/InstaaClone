import React from 'react';
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
    );
};

export default BottomTabView;

const styles = StyleSheet.create({
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
