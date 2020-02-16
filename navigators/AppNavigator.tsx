import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProgressScreen from '../screens/Progress';
import NoteScreen from '../screens/Note';
import SetupScreen from '../screens/SetupGoal';
import * as ROUTES from '../constants/routes';

const AppStack = createStackNavigator();

const AppNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen name={ROUTES.SETUP_GOAL} component={SetupScreen} />
    <AppStack.Screen name={ROUTES.PROGRESS} component={ProgressScreen} />
    <AppStack.Screen name={ROUTES.NOTE} component={NoteScreen} />
  </AppStack.Navigator>
);

export default AppNavigator;
