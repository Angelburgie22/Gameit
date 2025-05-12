import React, { useState } from 'react';
import { Alert, View, Image, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../style/styles'; // Asumiendo que tienes un archivo de estilos

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false); // Estado para el checkbox

  // Lógica de inicio de sesión
  const handleLogin = async () => {
    if (!isChecked) {
      Alert.alert('Error', 'Debes aceptar los términos y condiciones');
      return;
    }

    try {
      // Verificar si el usuario existe en AsyncStorage
      const storedUser = await AsyncStorage.getItem(`@user_${username}`); // Usar un prefijo para usuarios
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser.password === password) {
          // Login exitoso
          await AsyncStorage.setItem('@loggedInUser', JSON.stringify(parsedUser)); // Guardar el usuario logueado
          Alert.alert('Éxito', `Bienvenido, ${parsedUser.username}`);
          navigation.navigate('home');
        } else {
          Alert.alert('Error', 'Contraseña incorrecta');
        }
      } else {
        Alert.alert('Error', 'Usuario no registrado');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      Alert.alert('Error', 'Hubo un problema al intentar iniciar sesión');
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Image style={styles.image} source={require('../assets/logo.png')} />
        </View>
        <View style={{ alignItems: "center" }}>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Email o nombre de usuario *"
            placeholderTextColor="#999999"
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Contraseña *"
            placeholderTextColor="#999999"
            secureTextEntry
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => setIsChecked(!isChecked)} style={styles.checkboxContainer}>
              <View style={[styles.checkbox, isChecked ? styles.checked : styles.unchecked]} />
            </TouchableOpacity>
            <Text style={styles.text}>Acepto los términos y condiciones</Text>
          </View>
        </View>
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Iniciar sesión</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>¿Nuevo en GameIt?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('register')}>
              <Text style={styles.registertext}> Regístrate Aquí</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;