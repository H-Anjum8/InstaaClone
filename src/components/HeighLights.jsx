import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { UserData } from '../utils/UserData';


const HeighLights = () => {
    const navigation = useNavigation()

   
    return (
        <View>
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
                        <Entypo name="plus" style={{ fontSize: 20, color: 'black' }} />
                    </View>
                    {UserData.map((item, index) => {
                        console.log('userdata', item);
                        return (
                            <View key={index} style={{ marginLeft: 8 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('StoryView', { item })}>
                                    <View style={styles.storyOutline}>
                                        <Image style={styles.imgstyle} source={item.story.image} />
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ textAlign: 'center', fontSize: 9, width: 40, marginLeft: 6 }}>{item.story.title}</Text>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>

        </View>
    )
}

export default HeighLights

const styles = StyleSheet.create({
  
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
    
});



