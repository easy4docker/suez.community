import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import QRCodeScanner from '../comm/QRCodeScanner';
import { useFocusEffect } from '@react-navigation/native';

const CameraScanner = ({ navigation }) => {
  const [isObj, setIsObj] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      setIsObj(true);
      return () => {
        setIsObj(false);
      };
    }, [])
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
        {(!isObj) ? (<></>) : (<QRCodeScanner navigation={navigation}/>)}
    </SafeAreaView>
  );
};
export default CameraScanner;
