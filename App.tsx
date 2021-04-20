import React from 'react';
import { StatusBar } from 'react-native';

import colors from './src/styles/colors';

import Welcome from './src/pages/Welcome';

const App = () => {
  return (
    <>
      <Welcome />
      <StatusBar backgroundColor={colors.white} barStyle='dark-content' />
    </>
  );
};

export default App;
