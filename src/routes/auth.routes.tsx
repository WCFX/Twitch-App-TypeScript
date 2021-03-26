import React from 'react';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from '~/styles/colors';
import * as View from '~/views';

const { Navigator, Screen } = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          height: 60,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Roboto400',
          fontSize: 11,
          marginTop: 5,
        },
        inactiveTintColor: colors.black,
        activeTintColor: colors.purple,
      }}
    >
      <Screen
        options={{
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name="md-heart"
              size={size}
              color={focused ? colors.purple : colors.black}
            />
          ),
        }}
        name="Following"
        component={View.Following}
      />
      <Screen
        options={{
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name="md-browsers"
              size={size}
              color={focused ? colors.purple : colors.black}
            />
          ),
        }}
        name="Browse"
        component={View.Browse}
      />
      <Screen
        options={{
          tabBarIcon: ({ size, focused }) => (
            <MaterialCommunityIcons
              name="compass-outline"
              size={size}
              color={focused ? colors.purple : colors.black}
            />
          ),
        }}
        name="Discover"
        component={View.Discover}
      />
      <Screen
        options={{
          tabBarIcon: ({ size, focused }) => (
            <MaterialCommunityIcons
              name="trophy-outline"
              size={size}
              color={focused ? colors.purple : colors.black}
            />
          ),
        }}
        name="Esports"
        component={View.Esports}
      />
    </Navigator>
  );
};

export default AuthRoutes;
