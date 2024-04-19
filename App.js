import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './LoginScreen'; // Replace with your path
import { AuthContext, AuthProvider } from './AuthProvider'; // Replace with your path


export default function App() {
  return (
      <AuthProvider>
        <LoginScreen />
        <StatusBar style="light" />
      </AuthProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
