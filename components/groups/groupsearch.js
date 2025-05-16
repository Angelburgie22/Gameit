import React from "react";
import { Image, FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Prueba from "../../datos/Prueba";
import Icon from 'react-native-vector-icons/FontAwesome';

const GroupSearch = ({ searchText }) => {
    const filteredGroups = Prueba.filter(groups =>
        groups.namegame.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <FlatList
            data={filteredGroups}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            renderItem={({ item: groups }) => (
                <View key={groups.id} style={styles.card}>
                    <View style={styles.header}>
                        <Image style={styles.avatar} source={{ uri: groups.avatar }} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.gameTitle}>{groups.name}</Text>
                            <Text style={styles.creator}>Por {groups.screenName}</Text>
                        </View>
                    </View>
                    <Text style={styles.description}>{groups.namegame}</Text>
                    <Image style={styles.postImage} source={{ uri: groups.gameuri }} />

                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.joinButton}>
                            <Icon name="gamepad" size={16} color="#FFF" />
                            <Text style={styles.joinText}> Unirse</Text>
                        </TouchableOpacity>
                        <View style={styles.playersContainer}>
                            <Icon name="users" size={16} color="#FFF" />
                            <Text style={styles.playersText}> {groups.players} / 4 Jugadores</Text>
                        </View>
                    </View>
                </View>
            )}
        />
    );
};


const styles = StyleSheet.create({
    card: {
        backgroundColor: "#222831",
        borderRadius: 15,
        padding: 15,
        width: "90%",
        alignSelf: "center",
        shadowColor: "#000",
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 5,
        elevation: 5,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "#00FFF5",
    },
    gameTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    creator: {
        color: "#AAA",
        fontSize: 12,
    },
    postImage: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        marginVertical: 10,
    },
    description: {
        color: "#EEE",
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: "center",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    joinButton: {
        backgroundColor: "#00C851",
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    joinText: {
        color: "white",
        fontWeight: "bold",
        marginLeft: 5,
    },
    playersContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    playersText: {
        color: "white",
        marginLeft: 5,
    }
});

export default GroupSearch;
