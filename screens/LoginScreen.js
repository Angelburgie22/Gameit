import React from 'react';
import { Alert, View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar';


const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Implement login logic here
    //  - Call your authentication API
    //  - Store user data or token securely
    //  - If successful, navigate to the home screen
    navigation.navigate('home');
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}><Text style={styles.title}>GameIt</Text></View>
      <View style={{ alignItems: "center" }}><Text style={styles.subtitle}>Se parte de la comunidad Gamer</Text></View>
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={styles.input}
          value={username}
          color = "white"
          onChangeText={setUsername}
          placeholder="Email or username *"
          placeholderTextColor="#999999"
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={styles.input}
          value={password}
          color = "white"
          onChangeText={setPassword}
          placeholder="Password *"
          placeholderTextColor="#999999"
          secureTextEntry
        />
      </View>
        <Button borderColor= "black" color = "#00CC45"title='Iniciar sesion' onPress={handleLogin}/>
      <View/>
      <View style={{ alignSelf: "center", flexDirection: "row" }}>
        <Text style={styles.text}>¿Nuevo en GameIt?</Text>
        <TouchableWithoutFeedback onPress={() => Alert.alert('aqui te lleva a la pag de registro')}>
          <Text style={styles.registertext}> Registrate Aqui</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "#181818",
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 20,
    padding: 10,
    marginBottom: 20,
    color: "#FFFFFF",
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColorcolor: "#00CC45",
  },
  text: {
    marginTop: 15,
    color: "#FFFFFF",
  },
  registertext:{
    marginTop: 15,
    color: "#FFFFFF",
    fontWeight: "bold"
  }
});

export default LoginScreen;