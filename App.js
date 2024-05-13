import React from 'react';
import { StatusBar } from 'expo-status-bar';
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen'; // Replace with your path
import { AuthContext, AuthProvider } from './AuthProvider'; // Replace with your path
import Navigation from './Navigation';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <>
      <AuthProvider>
        <Navigation/>
      </AuthProvider>
    </>
  );
}


