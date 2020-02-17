/* eslint-disable global-require */
import React, { useState, useEffect, useContext } from 'react';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import { User } from 'firebase';
import AuthNavigator from './navigators/AuthNavigator';
import AppNavigator from './navigators/AppNavigator';
import * as ROUTES from './constants/routes';
import FirebaseContext from './context/FirebaseContext';
import Firebase from './config/firebase';

const RootNavigator = createStackNavigator();

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [isAuth, setAuth] = useState(false);

  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });

      firebase.auth.onAuthStateChanged((user: User) => {
        if (user) {
          setAuth(true);
        }

        setLoading(false);
      });
    })();
  }, []);

  if (isLoading) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <RootNavigator.Navigator screenOptions={{ headerShown: false }}>
        {isAuth
          ? <RootNavigator.Screen name={ROUTES.APP_NAVIGATOR} component={AppNavigator} />
          : <RootNavigator.Screen name={ROUTES.AUTH_NAVIGATOR} component={AuthNavigator} />}

      </RootNavigator.Navigator>
    </NavigationContainer>
  );
};

export default () => (
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>
);
