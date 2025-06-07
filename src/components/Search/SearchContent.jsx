import { Image, StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const imageSize = screenWidth / 3; // 3 images per row

const SearchContent = (data) => {
  const navigation = useNavigation();
  const searchData = [
    { id: 1, image: require('../../assets/SearchImages/post1.jpg') },
    { id: 2, image: require('../../assets/SearchImages/post2.jpg') },
    { id: 3, image: require('../../assets/SearchImages/post3.jpg') },
    { id: 4, image: require('../../assets/SearchImages/post4.jpg') },
    { id: 5, image: require('../../assets/SearchImages/post5.jpg') },
    { id: 6, image: require('../../assets/SearchImages/post6.jpg') },
    { id: 7, image: require('../../assets/SearchImages/post7.jpg') },
    { id: 8, image: require('../../assets/SearchImages/post8.jpg') },
    { id: 9, image: require('../../assets/SearchImages/post9.jpg') },
    { id: 10, image: require('../../assets/SearchImages/post10.jpg') },
    { id: 11, image: require('../../assets/SearchImages/post11.jpg') },
    { id: 12, image: require('../../assets/SearchImages/post12.jpg') },
    { id: 13, image: require('../../assets/SearchImages/post13.jpg') },
    { id: 14, image: require('../../assets/SearchImages/post14.jpg') },
    { id: 15, image: require('../../assets/SearchImages/post15.jpg') },
    { id: 16, image: require('../../assets/SearchImages/post1.jpg') },
    { id: 17, image: require('../../assets/SearchImages/post2.jpg') },
    { id: 18, image: require('../../assets/SearchImages/post3.jpg') },
  

  ];

  return (
    <View style={styles.container}>
      {searchData.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPressIn={() => navigation.navigate('SearchScreenPost', { selectedId: item.id })}
          style={styles.imageWrapper}
        >
          <Image source={item.image} style={styles.image} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SearchContent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    width: imageSize,
    height: imageSize,
    padding: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: '#ccc',
  },
});
