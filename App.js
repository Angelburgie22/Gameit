import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen'; // Replace with your path
import { AuthContext, AuthProvider } from './AuthProvider'; // Replace with your path
import Navigation from './Navigation';


export default function App() {
  return (
    <>
    <StatusBar barStyle="light" />
      <AuthProvider>
        <Navigation/>
      </AuthProvider>
    </>
  );
}


