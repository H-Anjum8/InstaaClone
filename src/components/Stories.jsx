import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { UserData } from '../utils/UserData'
import { useNavigation } from '@react-navigation/native'

const Stories = () => {
    const navigation= useNavigation()
    return (
        <View style={styles.mainContainer}>
            {UserData.map((item,index) => {
                console.log('userdata', item)
                return (
                    <View key={index} style={{ marginLeft: 8 }}>
                        <TouchableOpacity onPress={()=>navigation.navigate('StoryView',{item})}>
                            <View style={styles.storyOutline}>
                                <Image style={styles.imgstyle} source={item.story.image} />
                            </View>
                        </TouchableOpacity>
                        <Text style={{ textAlign: 'center' }} >{item.username}</Text>
                    </View>
                )

            })}

        </View >
    )
}

export default Stories

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        marginTop: 8
    },
    storyOutline: {
        borderWidth: 3,
        borderRadius: 40,
        padding: 2,
        borderColor:'red'
    },
    imgstyle: {
        height: 70,
        width: 70,
        borderRadius: 35
    }
})