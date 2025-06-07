
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { UserData } from '../../utils/UserData'
import Feather from 'react-native-vector-icons/Feather';

const SearchPost = ({ item, index, }) => {
    const screenWidth = Dimensions.get('window').width
    return (
        <View key={index} style={{
            marginTop: 20,

        }}>
            <View style={styles.maincontainer}>
                <View style={styles.container}>
                    <Image style={styles.img} source={{ uri: item.profile }}/>
                    <View>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.suggest}>Suggested for you</Text>
                    </View>
                </View>
                <View style={styles.container2}>

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
                    <Feather name="bookmark" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.caption}>
                <Text style={styles.captionuser}>{item.name}</Text>
                <Text>{item.post.caption}</Text>
            </View>
            <Text style={styles.date} >{item.post.date}</Text>

        </View>

    )
}

export default SearchPost

const styles = StyleSheet.create({
    maincontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        paddingHorizontal: 12,

    },
    container: {
        flexDirection: 'row',
        marginBottom: 8,
        alignItems: 'left',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container2: {
        flexDirection: 'row',
        marginBottom: 8,
        justifyContent: 'center',
        alignItems: 'center'

    },
    img: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    name: {
        fontWeight: 600,
        color: 'black',
        paddingLeft: 6,
        fontSize: 14
    },
    suggest: {

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

    },
    reactionscount: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    reaction: {
        height: 20,
        width: 20,
        marginLeft: 4
    },
    reactiontext: {

        marginLeft: 6
    },
    likecount: {
        fontSize: 16,
        fontWeight: 600,
        marginLeft: 13,
        marginTop: 10
    },
    caption: {
        paddingHorizontal: 13,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    captionuser: {
        fontSize: 14,
        fontWeight: 500,
        color: 'black',
        marginRight: 8,

    },
    date: {
        fontSize: 12,
        paddingHorizontal: 13,
        color: 'gray',
        marginRight: 8,
    }

})