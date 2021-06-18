//import App from './src/Main'
// export default App

import React, { useEffect }  from 'react';
import { NavigationContainer } from '@react-navigation/native';

import  Home   from './src/stacks/Home';

// import { createStore} from 'redux';

import store from './Store.js';
import { Provider, useDispatch } from 'react-redux'

import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {
  // const dispatch = useDispatch();
  useEffect(() => {
    store.subscribe(() => {
        console.log('A007=>' + new Date().toString(), store.getState())
      });
  }, []);
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Home />
      </Provider>
    </NavigationContainer>  
  )
}