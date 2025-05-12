import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import stylechat from '../style/stylechat';
import Icon from 'react-native-vector-icons/FontAwesome';
const ConversationScreen = ({ route }) => {
    const { userId, userName, userAvatar } = route.params; // Recibimos el userId y el userName
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [loggedInUser, setLoggedInUser] = useState(null);
    const navigation = useNavigation();

     useEffect(() => {
        const loadConversation = async () => {
            
          try {
            // Aquí deberías cargar los mensajes de la conversación entre el usuario logueado
            // y el usuario con el ID userId.  Por ahora, estamos usando datos de prueba.
             const user = await AsyncStorage.getItem('@loggedInUser');
            if(user){
              const parsedUser = JSON.parse(user);
              setLoggedInUser(parsedUser);
            }
            const dummyMessages = [
                { id: 'm1', sender: loggedInUser.username, text: 'Hola ' + userName, timestamp: '10:31 AM' },
                { id: 'm2', sender: userName, text: 'Hola! Cómo estás?', timestamp: '10:32 AM' },
                { id: 'm3', sender: loggedInUser.username, text: 'Bien, gracias. Y tú?', timestamp: '10:33 AM' },
            ];
            setMessages(dummyMessages);

          } catch (error) {
            console.error("Error al cargar la conversación", error);
            Alert.alert("Error", "No se pudo cargar la conversación.");
          }
        };
        loadConversation();
    }, [userId]);

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;
        const message = {
            id: `m${messages.length + 1}`,
            sender: loggedInUser.username, // El sender es el usuario logueado
            text: newMessage,
            timestamp: new Date().toLocaleTimeString(),
        };
        setMessages([...messages, message]);
        setNewMessage('');
        // Aquí debes enviar el mensaje al otro usuario (a través de tu sistema de chat)
    };

    return (
        <View style={stylechat.conversationContainer}>
            <View style={stylechat.conversationHeader}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon name="arrow-left" size={20} color="#FFF" />
                </TouchableOpacity>

                <Image style={stylechat.conversationAvatar} source={{ uri: userAvatar }} />
                <Text style={stylechat.conversationUserName}>{userName}</Text>
            </View>
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[
                        stylechat.messageContainer,
                        item.sender === loggedInUser.username ? stylechat.sent : stylechat.received,
                    ]}>
                        <Text style={stylechat.messageText}>{item.text}</Text>
                        <Text style={stylechat.messageTimestamp}>{item.timestamp}</Text>
                    </View>
                )}
                inverted // Para mostrar los mensajes más recientes al final
            />
            <View style={stylechat.inputContainer}>
                <TextInput
                    style={stylechat.input}
                    value={newMessage}
                    onChangeText={setNewMessage}
                    placeholder="Escribe un mensaje..."
                    placeholderTextColor="#999999"
                    returnKeyType="send"
                    onSubmitEditing={handleSendMessage}
                />
                <TouchableOpacity style={stylechat.sendButton} onPress={handleSendMessage}>
                     <Icon name="send" size={20} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ConversationScreen