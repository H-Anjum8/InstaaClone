import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { UserData } from '../utils/UserData'

const Post = () => {
   
        const screenWidth = Dimensions.get('window').width
  return (
    <View style={{marginTop:2}}>
        {
            UserData.map((item,index) =>{
             return(
                <View key={index} style={{marginTop:10}}> 
                <View style={styles.container}> 
                    <Image style={styles.img} source={item.profile} />
                    <Text style={styles.name}>{item.name}</Text>
                </View>
                <View>
                    <Image style={{width:screenWidth, height:400 , }} source={item.post.image} />
                </View>
                <View style={styles.reactions}>
                    <TouchableOpacity>
                        <Image style={{ height:20, width:20,}} source={require('../assets/Like.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.reaction} source={require('../assets/Messanger.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.reaction} source={require('../assets/Comment.png')} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.likecount}>{item.post.like} Likes </Text>
                <View style={styles.caption}>
                    <Text style={styles.captionuser}>{item.name}</Text>
                    <Text>{item.post.caption}</Text>
                </View>
                </View>
             )
})
        }

    </View>
  )
}

export default Post

const styles = StyleSheet.create({
    container:{
      flexDirection:'row',
      paddingHorizontal:10,
      marginBottom:8,
      alignItems:'left'
    },
    img:{
     width:30,
     height:30,
     borderRadius:15
    },
    name:{
        fontWeight:600,
        color:'black',
        paddingLeft:4,
        fontSize:16
    },
    reactions:{
        flexDirection:'row',
        paddingHorizontal:13,
        alignItems:'center',
        marginTop:15
    },
    reaction:{
        height:20,
        width:20,
        marginLeft:15
    },
    likecount:{
       fontSize:16,
       fontWeight:600,
       marginLeft:13,
       marginTop:10
    },
    caption:{
        paddingHorizontal:13,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center'
    },
    captionuser:{
        fontSize:16,
        fontWeight:600,
        color:'black',
        marginRight:8,

    }
    
})