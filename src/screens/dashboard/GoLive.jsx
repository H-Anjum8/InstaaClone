import React, { useEffect, useState, useRef } from 'react';
import { 
  View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator, Animated 
} from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { useIsFocused } from '@react-navigation/native';

const GoLive = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const devices = useCameraDevices();
  const [device, setDevice] = useState(null);
  const isFocused = useIsFocused();
  const pulseAnim = useRef(new Animated.Value(1)).current;

  // Wait for devices properly
  useEffect(() => {
    if (devices && devices.front) {
      setDevice(devices.front);
    }
  }, [devices]);

  useEffect(() => {
    const requestPermissions = async () => {
      const cameraPermission = await Camera.requestCameraPermission();
      const microphonePermission = await Camera.requestMicrophonePermission();

      if (cameraPermission === 'authorized' && microphonePermission === 'authorized') {
        setHasPermission(true);
      } else {
        Alert.alert('Permissions Required', 'Camera and Microphone permissions are needed.');
      }
    };
    requestPermissions();
  }, []);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && isLive === false) {
      setIsLive(true);
    }
  }, [countdown]);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.3,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  // FULL SAFE CHECK
  if (!device) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="white" />
        <Text style={styles.text}>Waiting for Camera Device...</Text>
      </View>
    );
  }

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Waiting for Permissions...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isFocused && (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
        />
      )}

      {isLive && (
        <View style={styles.header}>
          <Text style={styles.liveText}>LIVE</Text>
          <TouchableOpacity 
            onPress={() => {
              setIsLive(false);
              navigation.goBack();
            }} 
            style={styles.endButton}
          >
            <Text style={styles.endText}>End Live</Text>
          </TouchableOpacity>
        </View>
      )}

      {!isLive && countdown === 0 && (
        <View style={styles.bottomContainer}>
          <Animated.View style={[styles.captureButtonContainer, { transform: [{ scale: pulseAnim }] }]}>
            <TouchableOpacity
              style={styles.captureButton}
              onPress={() => setCountdown(3)}
            />
          </Animated.View>
          <Text style={styles.infoText}>Tap to Go Live</Text>
        </View>
      )}

      {countdown > 0 && (
        <View style={styles.countdownContainer}>
          <Text style={styles.countdownText}>{countdown}</Text>
        </View>
      )}
    </View>
  );
};

export default GoLive;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  text: { color: 'white', fontSize: 20, marginTop: 20 },
  header: { position: 'absolute', top: 40, left: 20, right: 20, flexDirection: 'row', justifyContent: 'space-between' },
  liveText: { color: 'red', fontSize: 24, fontWeight: 'bold' },
  endButton: { backgroundColor: 'white', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 10 },
  endText: { color: 'black', fontWeight: 'bold' },
  bottomContainer: { position: 'absolute', bottom: 80, width: '100%', alignItems: 'center' },
  captureButtonContainer: { justifyContent: 'center', alignItems: 'center' },
  captureButton: { width: 80, height: 80, borderRadius: 40, borderWidth: 6, borderColor: 'white', backgroundColor: 'red' },
  infoText: { color: 'white', marginTop: 20, fontSize: 16 },
  countdownContainer: { position: 'absolute', top: '40%', alignSelf: 'center' },
  countdownText: { color: 'white', fontSize: 100, fontWeight: 'bold' },
});
