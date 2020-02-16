/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import AuthNavigator from './navigators/AuthNavigator';

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
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
