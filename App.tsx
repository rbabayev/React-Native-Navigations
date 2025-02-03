import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';
import './global.css';
import Navigations from './src/screens/Navigations/Navigations';
const App = () => {
  return <Navigations />;
};

export default App;

const styles = StyleSheet.create({});
