import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Implement login logic here
    //  - Call your authentication API
    //  - Store user data or token securely
    //  - If successful, navigate to the home screen
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Gameit</Text>
      <Text style={styles.subtitle}>Be part of a growing community of gamers</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Email or username *"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password *"
        placeholderTextColor="#999"
        secureTextEntry
      />
      <Button title="Join" onPress={handleLogin} />
      <Text style={styles.text}>New to Gameit? Sign Up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: "#161616",
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
  },
  input: {
    height: 40,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  text: {
    marginTop: 15,
  },
});

export default LoginScreen;