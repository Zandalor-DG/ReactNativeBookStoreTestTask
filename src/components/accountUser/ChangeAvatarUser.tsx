import React, {useState} from 'react';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';

// Import Image Picker
// import ImagePicker from 'react-native-image-picker';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {baseURL} from '../../api/axios';
import {StateReduxType} from '../../store/reducers';
import {uploadAvatar} from '../../store/userStore/thunkUser';

const ChangeAvatarUser: React.FC<{}> = () => {
  const [filePath, setFilePath] = useState<ImagePickerResponse>({});
  const [isUploadAvatar, setIsUploadAvatar] = useState(true);
  const user = useSelector((state: StateReduxType) => state.userState.user);
  const dispatch = useDispatch();

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
            buttonPositive: '',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
            buttonPositive: '',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        Alert.alert('Write permission err', err);
      }
      return false;
    } else {
      return true;
    }
  };

  const captureImage = async (type: any) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          Alert.alert('User cancelled camera picker');
          return;
        } else if (response.errorCode === 'camera_unavailable') {
          Alert.alert('Camera not available on device');
          return;
        } else if (response.errorCode === 'permission') {
          Alert.alert('Permission not satisfied');
          return;
        } else if (response.errorCode === 'other') {
          Alert.alert(response.errorMessage || 'error response');
          return;
        }
        setFilePath(response);
        uploadAvatarToServer();
        setIsUploadAvatar(false);
      });
    }
  };

  const chooseFile = (type: any) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        Alert.alert('User cancelled camera picker');
        return;
      } else if (response.errorCode === 'camera_unavailable') {
        Alert.alert('Camera not available on device');
        return;
      } else if (response.errorCode === 'permission') {
        Alert.alert('Permission not satisfied');
        return;
      } else if (response.errorCode === 'other') {
        Alert.alert(response.errorMessage || 'error response');
        return;
      }
      setFilePath(response);
      setIsUploadAvatar(false);
    });
  };

  const uploadAvatarToServer = () => {
    const formData = new FormData();
    formData.append('filedata', {
      name: filePath.fileName || 'avatar',
      type: filePath.type,
      uri: filePath.uri ? filePath.uri.replace('file:/', '') : '',
    });
    dispatch(uploadAvatar(formData));
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={styles.titleText}>
        {user ? `Profile page ${user.fullName}` : "it's error"}
      </Text>
      <View style={styles.container}>
        <Image
          source={{uri: filePath.uri || `${baseURL}/${user?.avatar}`}}
          style={styles.imageStyle}
        />
        <Text style={styles.textStyle}>{filePath.uri}</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => captureImage('photo')}>
          <Text style={styles.textStyle}>Launch Camera for Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => chooseFile('photo')}>
          <Text style={styles.textStyle}>Choose Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          disabled={isUploadAvatar}
          onPress={uploadAvatarToServer}>
          <Text style={styles.textStyle}>Upload avatar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangeAvatarUser;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#153e8a',
    borderRadius: 5,
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});
