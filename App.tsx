import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';

import Routes from './src/routes';

import colors from './src/styles/colors';

const App = () => {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return (
      <>
        <AppLoading />
        <StatusBar backgroundColor={colors.white} barStyle='dark-content' />
      </>
    );
  }

  return (
    <>
      <Routes />
      <StatusBar backgroundColor={colors.white} barStyle='dark-content' />
    </>
  );
};

export default App;
