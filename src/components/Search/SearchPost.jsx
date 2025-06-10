<<<<<<< HEAD
=======

>>>>>>> ae3066ed969f62ff9f7a4f3c1c60eef0845e1751
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { UserData } from '../../utils/UserData'
import Feather from 'react-native-vector-icons/Feather';

<<<<<<< HEAD
const SearchPost = ({ item, index }) => {
    const screenWidth = Dimensions.get('window').width
    return (
        <View key={index} style={{ marginTop: 20 }}>
            <View style={styles.maincontainer}>
                <View style={styles.container}>
                    <Image style={styles.img} source={item.profile} />
=======
const SearchPost = ({ item, index, }) => {
    const screenWidth = Dimensions.get('window').width
    return (
        <View key={index} style={{
            marginTop: 20,

        }}>
            <View style={styles.maincontainer}>
                <View style={styles.container}>
                    <Image style={styles.img} source={{ uri: item.profile }}/>
>>>>>>> ae3066ed969f62ff9f7a4f3c1c60eef0845e1751
                    <View>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.suggest}>Suggested for you</Text>
                    </View>
                </View>
                <View style={styles.container2}>
<<<<<<< HEAD
=======

>>>>>>> ae3066ed969f62ff9f7a4f3c1c60eef0845e1751
                    <TouchableOpacity>
                        <Text style={styles.followbtn}>Follow</Text>
                    </TouchableOpacity>
                    <View style={{ padding: 10 }}>
                        <Feather name="more-vertical" size={24} color="black" />
                    </View>
                </View>
            </View>
            <View>
                <Image style={{
                    width: screenWidth,
                    resizeMode: 'cover',
                    height: 420
                }} source={item.post.image} />
            </View>
            <View style={styles.reactionsrow}>
                <View style={styles.reactions}>
                    <TouchableOpacity style={styles.reactionscount}>
                        <Image style={{
                            height: 22,
                            width: 22,
                            resizeMode: 'contain'
<<<<<<< HEAD
                        }} source={require('../../assets/Like.png')} />
                        <Text style={styles.reactiontext}>{item.post.like}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reactionscount}>
                        <Image style={styles.reaction} source={require('../../assets/Comment.png')} />
                        <Text style={styles.reactiontext}>{item.post.comments}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reactionscount}>
                        <Image style={styles.reaction} source={require('../../assets/Messanger.png')} />
                        <Text style={styles.reactiontext}>{item.post.share}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
=======
                        }} source={require('../../assets/Like.png')} /><Text style={styles.reactiontext}>{item.post.like}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reactionscount} >
                        <Image style={styles.reaction} source={require('../../assets/Comment.png')} /> <Text style={styles.reactiontext}>{item.post.comments}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reactionscount}>
                        <Image style={styles.reaction} source={require('../../assets/Messanger.png')} /><Text style={styles.reactiontext}>{item.post.share}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity >
>>>>>>> ae3066ed969f62ff9f7a4f3c1c60eef0845e1751
                    <Feather name="bookmark" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.caption}>
                <Text style={styles.captionuser}>{item.name}</Text>
                <Text>{item.post.caption}</Text>
            </View>
<<<<<<< HEAD
            <Text style={styles.date}>{item.post.date}</Text>
        </View>
=======
            <Text style={styles.date} >{item.post.date}</Text>

        </View>

>>>>>>> ae3066ed969f62ff9f7a4f3c1c60eef0845e1751
    )
}

export default SearchPost

const styles = StyleSheet.create({
    maincontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        paddingHorizontal: 12,
<<<<<<< HEAD
=======

>>>>>>> ae3066ed969f62ff9f7a4f3c1c60eef0845e1751
    },
    container: {
        flexDirection: 'row',
        marginBottom: 8,
<<<<<<< HEAD
        alignItems: 'center',
        justifyContent: 'center'
=======
        alignItems: 'left',
        justifyContent: 'center',
        alignItems: 'center'
>>>>>>> ae3066ed969f62ff9f7a4f3c1c60eef0845e1751
    },
    container2: {
        flexDirection: 'row',
        marginBottom: 8,
        justifyContent: 'center',
        alignItems: 'center'
<<<<<<< HEAD
=======

>>>>>>> ae3066ed969f62ff9f7a4f3c1c60eef0845e1751
    },
    img: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    name: {
<<<<<<< HEAD
        fontWeight: '600',
=======
        fontWeight: 600,
>>>>>>> ae3066ed969f62ff9f7a4f3c1c60eef0845e1751
        color: 'black',
        paddingLeft: 6,
        fontSize: 14
    },
    suggest: {
<<<<<<< HEAD
=======

>>>>>>> ae3066ed969f62ff9f7a4f3c1c60eef0845e1751
        color: 'black',
        paddingLeft: 6,
        fontSize: 8
    },
    followbtn: {
        paddingHorizontal: 16,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f2f6',
        borderRadius: 10,
    },
    reactionsrow: {
        flexDirection: 'row',
        paddingHorizontal: 13,
        justifyContent: "space-between",
        marginTop: 15,
        alignItems: 'center'
    },
    reactions: {
        flexDirection: 'row',
        alignItems: 'center',
<<<<<<< HEAD
=======

>>>>>>> ae3066ed969f62ff9f7a4f3c1c60eef0845e1751
    },
    reactionscount: {
        flexDirection: 'row',
        alignItems: 'center',
<<<<<<< HEAD
        marginRight: 15
=======

>>>>>>> ae3066ed969f62ff9f7a4f3c1c60eef0845e1751
    },
    reaction: {
        height: 20,
        width: 20,
        marginLeft: 4
    },
    reactiontext: {
<<<<<<< HEAD
        marginLeft: 6
    },
=======

        marginLeft: 6
    },
    likecount: {
        fontSize: 16,
        fontWeight: 600,
        marginLeft: 13,
        marginTop: 10
    },
>>>>>>> ae3066ed969f62ff9f7a4f3c1c60eef0845e1751
    caption: {
        paddingHorizontal: 13,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    captionuser: {
        fontSize: 14,
<<<<<<< HEAD
        fontWeight: '500',
        color: 'black',
        marginRight: 8,
=======
        fontWeight: 500,
        color: 'black',
        marginRight: 8,

>>>>>>> ae3066ed969f62ff9f7a4f3c1c60eef0845e1751
    },
    date: {
        fontSize: 12,
        paddingHorizontal: 13,
        color: 'gray',
<<<<<<< HEAD
        marginTop: 5
    }
=======
        marginRight: 8,
    }

>>>>>>> ae3066ed969f62ff9f7a4f3c1c60eef0845e1751
})