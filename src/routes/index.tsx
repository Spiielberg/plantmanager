import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './stack.routes';

const Routes: React.FC = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default Routes;
