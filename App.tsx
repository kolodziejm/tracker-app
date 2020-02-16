import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { useScreens } from 'react-native-screens';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  const [isLoading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Text>lol</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
};

export default App;
