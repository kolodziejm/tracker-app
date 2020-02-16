import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import CreateAccountScreen from '../screens/CreateAccount';
import * as ROUTES from '../constants/routes';

const AuthStack = createStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name={ROUTES.REGISTER} component={CreateAccountScreen} options={{ headerTitle: 'Create account' }} />
    <AuthStack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
  </AuthStack.Navigator>
);

export default AuthNavigator;
