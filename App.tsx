/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import AuthNavigator from './navigators/AuthNavigator';
import AppNavigator from './navigators/AppNavigator';
import * as ROUTES from './constants/routes';

const RootNavigator = createStackNavigator();

const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });

      setLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <RootNavigator.Navigator screenOptions={{ headerShown: false }}>
        <RootNavigator.Screen name={ROUTES.AUTH_NAVIGATOR} component={AuthNavigator} />
        <RootNavigator.Screen name={ROUTES.APP_NAVIGATOR} component={AppNavigator} />
      </RootNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
