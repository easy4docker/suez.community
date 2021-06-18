import React  from 'react';
import {  DetailsScreen, CameraScreen, PhotosScreen} from '../modules';

import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import   BottomTab  from './BottomTab';

const HomeStack = (props:any) => {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#0275d8' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerShown: false
        }}>
       <Stack.Screen
          name="Home"
          component={BottomTab}
          options={{ title: 'SuEz Coin' }}
        />
        <Stack.Screen
          name="Photos"
          component={PhotosScreen}
          options={{ title: 'About SuEz Bidc2' }}
        />

        <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{ title: 'About SuEz Bidc2' }}
        />

      <Stack.Screen
        name="list"
        component={PhotosScreen}
        options={{ title: 'Photos 6',
      }}
      />
      <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Details Page A' }}
        />
        <Stack.Screen
          name="Settings"
          component={DetailsScreen}
          options={{ title: 'Details Page B' }}
        />
    </Stack.Navigator>
    );
  }
export default HomeStack;

 