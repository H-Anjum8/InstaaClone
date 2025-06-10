import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,

} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppColor } from '../utils/AppColors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

async function hasAndroidPermission() {
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
}




export class GalleryScreen extends Component {

    constructor(props) {
    super(props);
    this.state = {images: [], albums: [], pickedImage: '', category: ''};
    this.imgArr = [];
  }

  async componentDidMount() {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }

    let params = {assetType: 'All'};
    CameraRoll.getAlbums(params)
      .then(albums => {
        this.setState({albums: albums});
        console.log(albums);
      })
      .catch(err => {
        console.error(err);
      });
  }

  imagePressed = (item, key) => {
    this.setState({pickedImage: item.node.image.uri});
    this.scrollview_ref.scrollTo({
      x: 0,
      y: this.imgArr[key],
      Animation: true,
    });
  };
  pickedCategory = (itemValue, itemIndex) => {
    let params = {first: 40, groupName: this.state.albums[itemIndex].title};

    this.setState({category: itemValue});

    CameraRoll.getPhotos(params).then(imgs => {
      console.log(params);
      console.log(imgs);
      this.setState({
        images: imgs.edges,
        pickedImage: imgs.edges[0].node.image.uri,
      });
    });
  };
  displayImages = () => {
    return this.state.images.map((item, key) => {
      return (
        <TouchableOpacity
          key={key}
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            this.imgArr[key] = layout.y;
          }}
          onPress={() => {
            this.imagePressed(item, key);
          }}>
          <Image style={styles.image} source={{uri: item.node.image.uri}} />
        </TouchableOpacity>
      );
    });
  };
  displayAssetCategories = () => {
    return this.state.albums.map((category, index) => {
      return <Picker.Item label={category.title} value={index} />;
    });
  };
    render() {
        return (
            <View >
                <View style={styles.headerWrapper}>
                    <View style={styles.headerLeftWrapper}>
                        <View>
                            <Icon size={25} name="times" />
                        </View>

                    </View>
                    <View>
                        <View>
                            <Text style={styles.headerSubTitle}>Next</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={styles.pickedFooterSection}>
                        <Text style={styles.pickedFooterTitle}>GALLERY</Text>
                    </View>
                    <View style={styles.footerSection}>
                        <Text style={styles.footerTitle}>PHOTO</Text>
                    </View>
                    <View style={styles.footerSection}>
                        <Text style={styles.footerTitle}>VIDEO</Text>
                    </View>
                </View>
                {/* <Text style={{ color: 'red' }} >WELLCOME</Text> */}
            </View>
        );
    }
}

export default GalleryScreen;

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
    footerSection: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    pickedFooterSection: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        borderBottomColor: AppColor.black,
        borderBottomWidth: 2,
    },
    footerTitle: {
        fontSize: 16,
        color: AppColor.gray,
    },
    pickedFooterTitle: {
        fontSize: 16,
        color: AppColor.black,
    },
    headerWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    headerLeftWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    headerTitleWrapper: {
        marginLeft: 15,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    headerSubTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: AppColor.primary,
    },
    image: {
        width: width / 4.1,
        height: width / 4,
        padding: 1,
    },
    galleryImagesWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    pickedImageWrapper: {
        height: height / 2,
    },
});