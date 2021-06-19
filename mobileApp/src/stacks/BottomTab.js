import React, { useEffect, useState }  from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CameraStack, ScannerStack, PhotosStack } from '../stackPacks';
import { HomeScreen, CameraScreen, PhotosScreen, CameraScanner } from '../modules';


import { useFocusEffect } from '@react-navigation/native';

export default function ButtonTab( props ) {

  useFocusEffect(
    React.useCallback(() => {

    //  console.log('navigation-8964->', props)

      return () => {
     //   console.log('navigation-8965->', props)
      };
    }, [])
  );


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
      name : 'Photos',
      tabBarLabel: 'My Coins',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="bitcoin" color={color} size={size} />
      ),
      component : PhotosScreen,
      // initialParams:{masterName : 'M_Photos'},
      tabBarVisible: true
    },
    {
      module : 'Camera',
      name : 'Camera',
      tabBarLabel: 'Camera',
      initialParams:{masterName : 'M_Camera'},
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="camera" color={color} size={size} />
      ),
      component : CameraScreen,
      tabBarVisible: true
    },
    { 
      module : 'Scanner',
      name : 'Scanner',
      initialParams:{masterName : 'M_Scanner'},
      tabBarLabel: 'QR Scan',
      tabBarIcon: ({ color, size }) => (
        <MaterialIcons name="event-available" size={size} color={color} />
      ),
      component : CameraScanner,
      tabBarVisible: false
    }
  ];

  useEffect(() => {
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
              listeners={({ navigation, route }) => ({
                tabPress: e => {
                   e.preventDefault();
                  // if (route.state && route.state.routeNames.length > 0) {
                    const name = (!route.params || !route.params.masterName) ? route.name : route.params.masterName
                    navigation.navigate(name);
                  //}
                },
              })}
            />
            )})}
      </Tab.Navigator>
  );
}