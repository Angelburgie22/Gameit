import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import ChatItem from '../components/chats/chatItem';
import stylechat from '../style/stylechat';

const dummyChats = [
    { id: '1', userId: 'user1', userName: 'Ana García', lastMessage: 'Hola! Cómo estás?', timestamp: '10:30 AM', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: '2', userId: 'user2', userName: 'Pedro Martínez', lastMessage: 'Qué tal el proyecto?', timestamp: 'Ayer', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: '3', userId: 'user3', userName: 'María López', lastMessage: 'Nos vemos el viernes', timestamp: '05/03/2024', avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: '4', userId: 'user4', userName: 'Carlos Rodríguez', lastMessage: 'Enviando ubicación', timestamp: '12:00 PM', avatar: 'https://i.pravatar.cc/150?img=4' },
    { id: '5', userId: 'user5', userName: 'Laura Sánchez', lastMessage: 'Ok, gracias!', timestamp: '1 día', avatar: 'https://i.pravatar.cc/150?img=5' },
];
const ChatScreen = () => {
    const [chats, setChats] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        const loadChats = async () => {
          try {

            // Aquí deberías cargar los chats del usuario logueado.
            // Por ahora, estamos usando datos de prueba.  Deberías adaptar esto
            // para obtener los chats reales del usuario desde AsyncStorage o
            // tu sistema de gestión de chats.
            const user = await AsyncStorage.getItem('@loggedInUser');
            if(user){
              const parsedUser = JSON.parse(user);
              setLoggedInUser(parsedUser);
            }
            setChats(dummyChats); // Carga los chats dummy

          } catch (error) {
            console.error("Error al cargar los chats", error);
            Alert.alert("Error", "No se pudieron cargar los chats.");
          }
        };
        loadChats();
    }, []);

    return (
        <View style={stylechat.container}>
             {loggedInUser &&  <Text style={stylechat.header}>Chats de {loggedInUser.username}</Text>}
            <FlatList
                data={chats}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ChatItem chat={item} />}
                ItemSeparatorComponent={() => <View style={stylechat.separator} />}
            />
        </View>
    );
};
export default ChatScreen;