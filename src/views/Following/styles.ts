import { Platform } from 'react-native';

import Constants from 'expo-constants';
import styled from 'styled-components/native';

import colors from '~/styles/colors';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  padding-top: ${`${statusBarHeight}px`};
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: Nunito_700Bold;
  color: #eeee;
`;
