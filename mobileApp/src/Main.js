import React, { useEffect }  from 'react';
import { LogBox } from 'react-native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import PhotosStack   from './stacks/PhotosStack.js';
// import { PhotosStack }   from './stacks.js';
import { CameraStack, ScannerStack, PhotosStack, HomeStack  } from './stacks.js';

import Env from './setting/Env.ts';
import * as Linking from 'expo-linking';

const Tab = createBottomTabNavigator();

export default function App() {
  const env = new Env();
  env.init();
  const FootNavigator = [
    {
      key : 0,
      module : 'Home',
      name : 'HomeStack',
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />
      ),
      component : HomeStack,
      tabBarVisible: true
    },
    {
      module : 'Photos',
      name : 'PhotosStack',
      tabBarLabel: 'My Coins',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />
      ),
      component : PhotosStack,
      tabBarVisible: true
    },
    {
      module : 'Camera',
      name : 'CameraStack',
      tabBarLabel: 'Camera',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="camera" color={color} size={size} />
      ),
      component : CameraStack,
      tabBarVisible: true
    },
    { /* <MaterialCommunityIcons name="qrcode-scan" color={color} size={size} />*/
      module : 'Scanner',
      name : 'ScannerStack',
      tabBarLabel: 'QR Scan',
      tabBarIcon: ({ color, size }) => (
        <MaterialIcons name="event-available" size={size} color={color} />
      ),
      component : ScannerStack,
      tabBarVisible: false
    }
  ];
  useEffect(() => {
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeStack"
        tabBarOptions={{
          activeTintColor: '#0275d8',
          
        }}>
        {FootNavigator.map((v, i) => {
          const comp = v.component;
          return (
            <Tab.Screen
              name={v.name}
              component={comp}
              key={i}
              options={{
                tabBarLabel: v.tabBarLabel,
                tabBarIcon: v.tabBarIcon,
                headerShown: false,
                tabBarVisible: (v.tabBarVisible) ? true: false
              }}
            />
            )})}
      </Tab.Navigator>
    </NavigationContainer>
  );
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/logo.png")}
        style={styles.logo}
      />
      <MaterialCommunityIcons name="home" color="red" size="12" />
      <Text>This is main app A!</Text>
      <TouchableOpacity
            style={styles.buttonClean}
            onPress={() => {
                Linking.openURL('exp://exp.host');
            }}>
            <Text style={styles.buttonCleanText}>Rebuild Application</Text>
           </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#43a1c9',
  },
  logo: {
    width: 150,
    height: 170,
    margin: 10,
  }, 
  buttonClean: {
    alignItems: 'center',
    backgroundColor: '#aa0000',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  buttonCleanText: {
    color : '#fff',
  },
})
