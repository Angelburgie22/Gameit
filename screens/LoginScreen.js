import React from 'react';
import { Alert, View, Image, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Touchable, TouchableOpacity} from 'react-native';
import { StatusBar } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


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
    <>
    <StatusBar barStyle="light-content" />
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}><Image style = {styles.image} source={require('../assets/logo.png')}></Image></View>
      <View style = {{alignItems: "center"}}>
        <TextInput
          style={styles.input}
          value={username}
          color = "white"
          onChangeText={setUsername}
          placeholder="Email or username *"
          placeholderTextColor="#999999"
        />
        <TextInput
          style={styles.input}
          value={password}
          color = "white"
          onChangeText={setPassword}
          placeholder="Password *"
          placeholderTextColor="#999999"
          secureTextEntry
        />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.text}>Acepto los términos y condiciones</Text>
        </View>

      </View>
      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text style={styles.text}>¿Nuevo en GameIt?</Text>
          <TouchableWithoutFeedback onPress={() => Alert.alert('aqui te lleva a la pag de registro')}>
            <Text style={styles.registertext}> Registrate Aquí</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 30,
    backgroundColor: "#181818",
    flexDirection: "column",
    justifyContent: "space-between"
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
  },
  image:{
    marginTop: 100,
    height: 200,
    width: 200
  },
  loginButton: {
    backgroundColor: "#00CC45",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    borderWidth: 1,
    width: "80%",
    borderColor: "black",
    alignItems: "center",
    marginBottom: 10
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },
  
  
});

export default LoginScreen;