// src/App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Dashboard from './screens/Dashboard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Dashboard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});
