import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { UserData } from '../utils/UserData';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker';

const Stories = () => {
  const navigation = useNavigation();

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
      <View style={{ marginLeft: 8 }}>
        <TouchableOpacity onPress={addYourStory}>
          <View style={styles.storyOutline}>
            <Image
              style={styles.imgstyle}
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
        <Text style={{ textAlign: 'center' }}>Your Story</Text>
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
            <Text style={{ textAlign: 'center' }}>{item.username}</Text>
          </View>
        );
      })}
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
    borderColor: 'red',
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
    right: -5,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
});