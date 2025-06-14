import React, { useEffect, useState } from 'react';
import {
  View,
   StyleSheet,
  Alert,
  Image,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import { launchCamera,  } from 'react-native-image-picker';

import { AppColor } from '../../utils/AppColors';

const AddStory = ({ navigation }) => {
  const [selectedStory, setSelectedStory] = useState(null);

  // ask permission for android camera
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs access to your camera to capture story.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  // open camera directly when screen mounts
  useEffect(() => {
    (async () => {
      const hasPermission = await requestCameraPermission();
      if (!hasPermission) {
        Alert.alert('Permission Denied', 'Camera permission is required.');
        return;
      }

      launchCamera(
        {
          mediaType: 'mixed',
          includeBase64: false,
          saveToPhotos: true,
        },
        (response) => {
          if (response.didCancel) {
            console.log('User cancelled camera');
          } else if (response.errorCode) {
            Alert.alert('Error', response.errorMessage || 'Something went wrong');
          } else if (response.assets && response.assets.length > 0) {
            const asset = response.assets[0];
            setSelectedStory(asset.uri);
            console.log('Story Captured:', asset.uri, asset.type);
            Alert.alert('Story Captured', `File: ${asset.uri}`);
          }
        }
      );
    })();
  }, []);



  return (
    <View >
    </View>
  );
};

export default AddStory;

const styles = StyleSheet.create({
  
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 40,
    color: AppColor.black,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColor.primary,
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    width: '80%',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
  previewContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  previewLabel: {
    fontSize: 16,
    marginBottom: 10,
    color: AppColor.black,
  },
  previewImage: {
    width: 250,
    height: 400,
    borderRadius: 10,
  },
  backButton: {
    marginTop: 30,
  },
  backButtonText: {
    fontSize: 16,
    color: AppColor.gray,
  },
});
