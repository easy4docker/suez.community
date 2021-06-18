// import * as React from 'react';
import React, { useEffect }  from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, DetailsScreen, ProfileScreen, SettingsScreen, CameraScreen, PhotosScreen} from '../modules';

const PhotosStack = (props) => {

  const Stack = createStackNavigator();
  useEffect(() => {
    (async () => {
    })();
  }, []);
  return (
    <>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#0275d8' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerShown: true
      }}>
      <Stack.Screen
        name="list"
        component={PhotosScreen}
        options={{ title: 'Photos 6',
      }}
      />
      <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{ title: 'Camera' }}
        />

    </Stack.Navigator>
    </>
  );
}
export default PhotosStack;