import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as View from '~/views';

const { Navigator, Screen } = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <Navigator>
      <Screen name="Following" component={View.Following} />
      <Screen name="Browse" component={View.Browse} />
      <Screen name="Discover" component={View.Discover} />
      <Screen name="Esports" component={View.Esports} />
    </Navigator>
  );
};

export default AuthRoutes;
