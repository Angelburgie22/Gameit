import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import stylechat from '../../style/stylechat';

// Para los íconos, puedes usar una biblioteca como react-native-vector-icons
// Importa los íconos que necesites, por ejemplo:
import Icon from 'react-native-vector-icons/FontAwesome'; // Puedes cambiar FontAwesome por otra librería

// Dummy data para los chats (reemplazar con datos reales)

const ChatItem = ({ chat }) => {
    const navigation = useNavigation();

    // Función para navegar a la pantalla de conversación con el usuario
    const handleChatPress = () => {
        navigation.navigate('Conversation', { userId: chat.userId, userName: chat.userName, userAvatar: chat.avatar }); // Pasamos el ID del usuario al que se le va a enviar el mensaje
    };

    return (
        <TouchableOpacity style={stylechat.chatItem} onPress={handleChatPress}>
            <Image style={stylechat.avatar} source={{ uri: chat.avatar }} />
            <View style={stylechat.chatInfo}>
                <Text style={stylechat.userName}>{chat.userName}</Text>
                <Text style={stylechat.lastMessage}>{chat.lastMessage}</Text>
            </View>
            <Text style={stylechat.timestamp}>{chat.timestamp}</Text>
        </TouchableOpacity>
    );
};

export default ChatItem