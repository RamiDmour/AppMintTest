import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../screens/main';
import { NavigationContainer } from './NavigationContainer';

export type RootStackParamList = {
  MainScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Root = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainScreen" component={MainScreen} />
  </Stack.Navigator>
);

export const RootNavigator = () => (
  <NavigationContainer>
    <Root />
  </NavigationContainer>
);
