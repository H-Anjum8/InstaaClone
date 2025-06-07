import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { UserData } from '../utils/UserData';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker';

const Stories = () => {
  const navigation = useNavigation();
  const ringColors = ['#f09433', '#e6683c', '#dc2743', '#cc2366', '#bc1888'];
  // State to store your uploaded story image
  const [myStoryImage, setMyStoryImage] = useState(null);

  // Function to pick image from gallery
  const addYourStory = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.8,
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorMessage) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const source = { uri: response.assets[0].uri };
          setMyStoryImage(source);
          console.log('Story image selected: ', source);
        }
      }
    );
  };

  return (
    <View style={styles.mainContainer}>
      {/* Add Your Story */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          paddingVertical: 5,
          paddingHorizontal: 10,
        }}>
      <View style={{ marginLeft: 8 }}>
        <TouchableOpacity onPress={addYourStory}>
          <View style={{
            ...styles.outerRingColor,
            borderColor: ringColors[ringColors.length], // rotates colors
          }}>
            <Image
              style={styles.imgstyle2}
              source={
                myStoryImage
                  ? myStoryImage
                  : require('../assets/data/hadidp.webp') // default image before upload
              }
            />
            <View style={styles.addIcon}>
              <Icon name="plus-circle" size={22} color="#4CAF50" />
            </View>
          </View>
        </TouchableOpacity>
        <Text style={{ textAlign: 'center',fontSize:12 }}>Your Story</Text>
      </View>

      {/* Map through UserData stories */}
      
        {UserData.map((item, index) => {
          console.log('userdata', item);
          return (
            <View key={index} style={{ marginLeft: 8 }}>
              <TouchableOpacity onPress={() => navigation.navigate('StoryView', { item })}>
                <View style={styles.storyOutline}>
                  <Image style={styles.imgstyle} source={item.story.image} />
                </View>
              </TouchableOpacity>
              <Text style={{ textAlign: 'center',fontSize:12 }}>{item.username}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Stories;

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
    height: 60,
    width: 60,
    borderRadius: 35,
  },
  imgstyle2:{
 height: 68,
    width: 70,
    borderRadius: 35,
  },
  addIcon: {
    position: 'absolute',
    bottom: 0,
    right: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
});