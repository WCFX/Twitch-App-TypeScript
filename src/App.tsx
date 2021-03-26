import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Routes from './routes';

export default () => {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar style="light" backgroundColor="#221c35" />
    </NavigationContainer>
  );
};
