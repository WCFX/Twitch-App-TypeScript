import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as View from '~/views';

const { Navigator, Screen } = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <Navigator>
      <Screen
        options={{
          tabBarIcon: ({ size, focused }) => (
            <Ionicons name="md-heart" size={26} />
          ),
        }}
        name="Following"
        component={View.Following}
      />
      <Screen name="Browse" component={View.Browse} />
      <Screen name="Discover" component={View.Discover} />
      <Screen name="Esports" component={View.Esports} />
    </Navigator>
  );
};

export default AuthRoutes;
