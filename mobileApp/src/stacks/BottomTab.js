import React, { useEffect, useState }  from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CameraStack, ScannerStack, PhotosStack } from '../stackPacks';
import { HomeScreen, CameraScreen, PhotosScreen} from '../modules';
// import Env from '../setting/Env.ts';

export default function ButtonTab( props ) {
  // const env = new Env();
  const [FoodItem, setFootItem] = useState('HomeStack');
  // env.init();
  const FootNavigator = [
    {
      key : 0,
      module : 'Home',
      name : 'Home',
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />
      ),
      component : HomeScreen,
      initialParams:{v:0},
      tabBarVisible: true
    },
    {
      module : 'Photos',
      name : 'PhotosStack1',
      tabBarLabel: 'My Coins',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="bitcoin" color={color} size={size} />
      ),
      component : PhotosScreen,
      initialParams:{v:1},
      tabBarVisible: true
    },
    {
      module : 'Camera',
      name : 'CameraStack',
      tabBarLabel: 'Camera',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="camera" color={color} size={size} />
      ),
      component : CameraScreen,
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
  const switchMe = () => {
    console.log('prrrr==111551>', "props.navigation.navigate('Home')");
   // console.log(props.navigate('Home'));
  }
  useEffect(() => {
    switchMe();
  }, []);
  const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#0275d8',
        }}>
        {FootNavigator.map((v, i) => {
          return (
            <Tab.Screen
              name={v.name}
              component={v.component}
              initialParams={v.initialParams}
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
  );
}