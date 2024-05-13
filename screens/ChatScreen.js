import React from 'react';
import { Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import Request from '../components/chats/request';
import Relates from '../components/chats/relates';

const ChatScreen = () => {
    return(
        <View style = {{backgroundColor : "#404040", flex : 1}}>
            <View style = {{padding: 10}}>
                <Text style = {styles.text}>Conversaciones</Text>
            </View>
            <View>
                <Relates/>
            </View>
            <View style = {{padding: 10}}>
                <Text style = {styles.text}>Solicitud de mensajes</Text>
            </View>
            <View>
                <Request/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    text : {
        fontSize: 20, 
        color : "white", 
        fontWeight: "bold"
    }
})
export default ChatScreen;