import React, { useState } from 'react';
import { Alert, View, Image, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../style/styles';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState(''); // Agregamos el estado para el nombre
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleRegister = async () => {
    if (!isChecked) {
      Alert.alert('Error', 'Debes aceptar los términos y condiciones');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    // Verificar si el usuario ya existe
    try {
      const existingUser = await AsyncStorage.getItem(`@user_${username}`);
      if (existingUser) {
        Alert.alert('Error', 'El usuario ya está registrado');
      } else {
        // Generar userId (usando el username para este ejemplo)
        const userId = username;
        const newUser = {
          userId: username,
          name: name,
          username: username,
          password: password,
          avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`, // Asignar un avatar aleatorio
        };
        await AsyncStorage.setItem(`@user_${userId}`, JSON.stringify(newUser));
        Alert.alert('Éxito', 'Usuario registrado con éxito');
        navigation.navigate('login'); // Navegar a la pantalla de login después del registro
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      Alert.alert('Error', 'Error al registrar usuario'); // Mostrar alerta al usuario
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
            value={name}
            onChangeText={setName}
            placeholder="Nombre Completo *"
            placeholderTextColor="#999999"
          />
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
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirmar Contraseña *"
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
          <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
            <Text style={styles.loginButtonText}>Registrarse</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>¿Ya tienes una cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
              <Text style={styles.registertext}> Inicia sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};


export default RegisterScreen;
