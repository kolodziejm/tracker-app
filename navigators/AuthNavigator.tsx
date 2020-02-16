/* eslint-disable global-require */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import CreateAccountScreen from '../screens/CreateAccount';

const AuthStack = createStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Create account" component={CreateAccountScreen} />
  </AuthStack.Navigator>
);

export default AuthNavigator;
