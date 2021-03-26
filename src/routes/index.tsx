import React from 'react';

import {
  Archivo_400Regular,
  Archivo_600SemiBold,
  Archivo_700Bold,
} from '@expo-google-fonts/archivo';
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font';

import AuthRoutes from './auth.routes';

const Routes = () => {
  const [fontsLoaded] = useFonts({
    Nunito400: Nunito_400Regular,
    Nunito600: Nunito_600SemiBold,
    Nunito700: Nunito_700Bold,
    Poppins400: Poppins_400Regular,
    Poppins600: Poppins_600SemiBold,
    Poppins700: Poppins_700Bold,
    Archivo400: Archivo_400Regular,
    Archivo600: Archivo_600SemiBold,
    Archivo700: Archivo_700Bold,
    Roboto400: Roboto_400Regular,
    Roboto500: Roboto_500Medium,
    Roboto700: Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return <AuthRoutes />;
};

export default Routes;
