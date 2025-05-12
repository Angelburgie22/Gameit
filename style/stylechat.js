import { StyleSheet } from "react-native";
const stylechat = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e1e',
    },
    header: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        padding: 16,
        textAlign: 'center'
    },
    chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#2a2a2a',
        borderRadius: 10
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    chatInfo: {
        flex: 1,
    },
    userName: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    lastMessage: {
        color: '#A9A9A9',
        fontSize: 14,
    },
    timestamp: {
        color: '#A9A9A9',
        fontSize: 12,
    },
    separator: {
        height: 1,
        backgroundColor: '#333',
        marginHorizontal: 16,
    },
    conversationContainer: {
        flex: 1,
        backgroundColor: '#1e1e1e',
    },
    conversationHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#2a2a2a',
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
     conversationAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    conversationUserName: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 18,
    },
    messageContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        margin: 8,
        borderRadius: 10,
        padding: 10,
        maxWidth: '80%',
    },
    sent: {
        backgroundColor: '#007bff', // Azul para los mensajes enviados
        justifyContent: 'flex-end',
         alignSelf: 'flex-end',
    },
    received: {
        backgroundColor: '#A9A9A9', // Gris para los mensajes recibidos
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
    },
    messageText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
     messageTimestamp: {
        color: '#fff',
        fontSize: 12,
        alignSelf: 'flex-end',
        marginTop: 5
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        backgroundColor: '#2a2a2a',
        borderTopWidth: 1,
        borderTopColor: '#333',
    },
    input: {
        flex: 1,
        backgroundColor: '#333',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginRight: 8,
        color: '#fff'
    },
    sendButton: {
        backgroundColor: '#007bff',
        borderRadius: 25,
        padding: 10,
    },
});

export default stylechat