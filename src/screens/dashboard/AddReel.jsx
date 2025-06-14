import React, { useState, useRef } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Image,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native';

import SettingIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';
import { AppColor } from '../../utils/AppColors';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const imageSize = width / 3;

// Mock album data
const mockAlbums = {
    all: [
        { uri: require('../../assets/SearchImages/post1.jpg'), type: 'image' },
        { uri: require('../../assets/SearchImages/post2.jpg'), type: 'image' },
        { uri: require('../../assets/SearchImages/post3.jpg'), type: 'image' },
        { uri: require('../../assets/SearchImages/post4.jpg'), type: 'image' },
        { uri: require('../../assets/SearchImages/post5.jpg'), type: 'image' },
        { uri: require('../../assets/SearchImages/post6.jpg'), type: 'image' },
        { uri: require('../../assets/SearchImages/post7.jpg'), type: 'image' },
        { uri: require('../../assets/SearchImages/post8.jpg'), type: 'image' },
    ],
    images: [
        { uri: require('../../assets/SearchImages/post1.jpg'), type: 'image' },
        { uri: require('../../assets/SearchImages/post2.jpg'), type: 'image' },
    ],
    videos: [
        { uri: require('../../assets/SearchImages/post3.jpg'), type: 'image' },
        { uri: require('../../assets/SearchImages/post4.jpg'), type: 'image' },
    ],
};

const AddReel = ({ }) => {
    const navigation = useNavigation();
      const [albums, setAlbums] = useState(mockAlbums);
      const [selectedAlbum, setSelectedAlbum] = useState('all');
      const [media, setMedia] = useState(mockAlbums['all']);
      const [pickedMedia, setPickedMedia] = useState(
        mockAlbums['all'].length > 0 ? [mockAlbums['all'][0].uri] : []
      );
      const [filter, setFilter] = useState('all');
      const [showFooter, setShowFooter] = useState(true);
      const [multiSelect, setMultiSelect] = useState(true); // Multi-select toggle
      const scrollViewRef = useRef(null);
      const imgArr = useRef([]);
    
      const pickMedia = () => {
        const mediaType = filter === 'videos' ? 'video' : 'photo';
        launchImageLibrary({ mediaType, quality: 1 }, (response) => {
          if (response.didCancel) {
            console.log('User cancelled media picker');
          } else if (response.errorCode) {
            Alert.alert('Error', response.errorMessage || 'Something went wrong');
          } else if (response.assets && response.assets[0].uri) {
            const newMedia = {
              uri: { uri: response.assets[0].uri },
              type: mediaType,
            };
            const updatedMedia = [...media, newMedia];
            setMedia(updatedMedia);
            setAlbums((prevAlbums) => ({
              ...prevAlbums,
              [selectedAlbum]: [...(prevAlbums[selectedAlbum] || []), newMedia],
              all: [...prevAlbums.all, newMedia],
            }));
    
            // Immediately show new media in top preview
            setPickedMedia((prev) => multiSelect ? [...prev, newMedia.uri] : [newMedia.uri]);
          }
        });
      };
    
      const mediaPressed = (item, key) => {
        setPickedMedia((prev) => {
          const alreadySelected = prev.includes(item.uri);
          if (multiSelect) {
            return alreadySelected
              ? prev.filter((uri) => uri !== item.uri)
              : [...prev, item.uri];
          } else {
            return alreadySelected ? [] : [item.uri];
          }
        });
    
        if (scrollViewRef.current) {
          scrollViewRef.current.scrollTo({
            x: 0,
            y: imgArr.current[key],
            animated: true,
          });
        }
      };
    
      const displayMedia = () => {
        const filteredMedia = media.filter((item) => {
          if (filter === 'all') return true;
          if (filter === 'images') return item.type === 'image';
          if (filter === 'videos') return item.type === 'video';
          return true;
        });
    
        return filteredMedia.map((item, key) => {
          const selectedIndex = pickedMedia.findIndex((uri) => uri === item.uri);
          const isSelected = selectedIndex !== -1;
    
          return (
            <TouchableOpacity
              key={key}
              onLayout={(event) => {
                const layout = event.nativeEvent.layout;
                imgArr.current[key] = layout.y;
              }}
              onPress={() => mediaPressed(item, key)}
            >
              <View>
                <Image
                  style={[styles.media, isSelected && styles.selectedMedia]}
                  source={item.uri}
                />
                {isSelected && (
                  <View style={styles.selectionOverlay}>
                    <Text style={styles.selectionText}>{selectedIndex + 1}</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        });
      };
    
      const handlePost = () => {
        console.log('Posting media:', pickedMedia);
        Alert.alert('Success', `Posted ${pickedMedia.length} media items!`);
      };
    
      const handleScroll = (event) => {
        const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
        const scrollPosition = contentOffset.y + layoutMeasurement.height;
        const contentHeight = contentSize.height;
        setShowFooter(!(scrollPosition >= contentHeight - 10));
      };
    
      const handleAlbumChange = (value) => {
        setSelectedAlbum(value);
        setMedia(albums[value] || []);
        setPickedMedia(albums[value].length > 0 ? [albums[value][0].uri] : []);
      };
    
    return (
        <ScrollView
            style={styles.main}
            ref={scrollViewRef}
            onScroll={handleScroll}
            scrollEventThrottle={16}
        >
            <View style={styles.headerWrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon size={22} name="times" color='white' />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePost}>
                    <Text style={styles.headerSubTitle}>New Reel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePost}>
                    <SettingIcon name="cog" size={22} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.reelicons}>
                <TouchableOpacity onPress={handlePost}>

                </TouchableOpacity>
                <Text style={styles.draft}>Draft</Text>
                <Text style={styles.draft}>Template</Text>
            </View>

           <View style={styles.filterWrapper}>
                 <View style={styles.dropdownContainer}>
                   <Picker
                     selectedValue={filter}
                     onValueChange={setFilter}
                     style={styles.picker}
                     dropdownIconColor="white"
                   >
                     <Picker.Item label="Recent" value="all" />
                     <Picker.Item label="Images" value="images" />
                     <Picker.Item label="Videos" value="videos" />
                   </Picker>
                 </View>
         
                 <View style={styles.cross}>
                   <TouchableOpacity onPress={() => setMultiSelect(!multiSelect)}>
                     <Icon name="clone" size={25} color={multiSelect ? 'white' : AppColor.primary} />
                   </TouchableOpacity>
                 </View>
               </View>
         
               <View style={styles.galleryMediaWrapper}>
                 <TouchableOpacity style={styles.addMediaButton} onPress={pickMedia}>
                   <Icon name="camera" size={30} color={AppColor.gray} />
                 </TouchableOpacity>
                 {displayMedia()}
               </View>
         
               {showFooter && (
                 <View style={styles.footer}>
                   <View style={styles.pickedFooterSection}>
                     <Text style={styles.pickedFooterTitle}>POST</Text>
                   </View>
                   <View style={styles.footerSection}>
                     <TouchableOpacity onPress={() => navigation.navigate('AddStory')}>
                       <Text style={styles.footerTitle}>Story</Text>
                     </TouchableOpacity>
                   </View>
                   <View style={styles.footerSection}>
                     <TouchableOpacity onPress={() => navigation.navigate('AddReel')}>
                       <Text style={styles.footerTitle}>REEL</Text>
                     </TouchableOpacity>
                   </View>
                   <View style={styles.footerSection}>
                     <TouchableOpacity onPress={() => navigation.navigate('GoLive')}>
                       <Text style={styles.footerTitle}>Live</Text>
                     </TouchableOpacity>
                   </View>
                 </View>
               )}

          
        </ScrollView>
    );
};

export default AddReel;

const styles = StyleSheet.create({
    main: {
        backgroundColor: AppColor.white,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        backgroundColor: 'black',
        borderBottomColor: AppColor.lightGray,
    },
    headerSubTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },

    draft: {
        backgroundColor: '#222222',
        borderRadius: 20,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingHorizontal: 16,
        paddingVertical: 2

    },
    reelicons: {
        backgroundColor: 'black',
        flexDirection: 'row',
        height: 30,
        gap: 4,
        color: 'white'
    },
      pickedMediaContainer: {
        height: height / 2.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColor.lightGray,
      },
      singlePickedMediaWrapper: {
        width: width,
        height: height / 2.5,
        resizeMode: 'cover',
      },
      pickedMediaWrapper: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        margin: 5,
      },
      noMediaText: { textAlign: 'center', fontSize: 16, color: AppColor.gray },
    
      cross: { backgroundColor: 'black', justifyContent: 'center', marginRight: 10 },
    
      filterWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        backgroundColor: 'black',
      },
      dropdownContainer: { backgroundColor: 'black', width: 130 },
      picker: { color: 'white', padding: 0, backgroundColor: 'black' },
    
      galleryMediaWrapper: { flexDirection: 'row', flexWrap: 'wrap' },
      media: { width: imageSize, height: imageSize },
      selectedMedia: { borderWidth: 2, borderColor: AppColor.primary },
    
      addMediaButton: {
        width: imageSize,
        height: imageSize,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      },
      selectionOverlay: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      selectionText: { color: 'white', fontWeight: 'bold', fontSize: 18 },
    
      footer: {
        position: 'absolute',
        top: 640,
        left: 20,
        backgroundColor: 'black',
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 100,
        paddingVertical: 10,
      },
      footerSection: {
        backgroundColor: 'black',
        borderRadius: 100,
        flex: 1,
        alignItems: 'center',
        padding: 4,
      },
      pickedFooterSection: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 2,
        borderBottomWidth: 2,
        borderBottomColor: AppColor.black,
        backgroundColor: 'black',
        borderRadius: 100,
      },
      footerTitle: { fontSize: 16, color: AppColor.gray },
      pickedFooterTitle: { color: AppColor.gray, fontSize: 16, fontWeight: 'bold' },
});

