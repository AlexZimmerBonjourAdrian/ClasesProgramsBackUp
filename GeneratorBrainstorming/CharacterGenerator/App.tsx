import React from 'react';
import { StatusBar } from 'expo-status-bar';
import GeneratorScreen from './src/screens/GeneratorScreen';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <GeneratorScreen />
    </>
  );
}
