import React from 'react';
import { Alert, View, Image, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Touchable, TouchableOpacity} from 'react-native';
import { StatusBar } from 'react-native';
import styles from '../style/styles';
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

export default LoginScreen;