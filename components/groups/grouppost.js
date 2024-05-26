import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image, FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GroupPost = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        axios.get("https://gameit-d77d4db89096.herokuapp.com/api/post/get_posts")
            .then((response) => {
                if (response.data && response.data.posts) {
                    setGroups(response.data.posts);
                } else {
                    console.log("Invalid response structure:", response.data);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    const renderGroupCard = ({ item }) => {
        return (
            <View style={styles.card}>
                <View style={styles.header}>
                    <Image style={styles.image} source={{ uri: item.photo_url }} />
                    <View>
                        <Text style={styles.name}>{item.user}</Text>
                        <Text style={styles.username}>{item.username}</Text>
                    </View>
                </View>
                <Image style={styles.post} source={{ uri: item.post.photo_url }} />
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Unirse a Grupo</Text>
                    </TouchableOpacity>
                    <Text style={styles.groupInfo}>{item.post.grouppost_id} / 4</Text>
                </View>
            </View>
        );
    };

    return (
        <FlatList
            data={groups}
            keyExtractor={(item) => item.user_id.toString()}
            renderItem={renderGroupCard}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
    );
};

const styles = StyleSheet.create({
    card: {
        paddingTop: 10,
        backgroundColor: "#4F4F4F",
        borderRadius: 10,
        flex: 1,
        width: "85%",
        alignSelf: "center"
    },
    header: {
        flexDirection: "row",
        padding: 10
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 30
    },
    name: {
        fontSize: 18,
        color: "white"
    },
    username: {
        color: "gray"
    },
    post: {
        width: 200,
        height: 200,
        alignSelf: "center",
        marginTop: 10
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 10
    },
    button: {
        backgroundColor: "#31CE40",
        borderRadius: 3,
        width: "40%",
        height: 30,
        justifyContent: "center"
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    },
    groupInfo: {
        color: "white",
        textAlign: "center"
    },
    separator: {
        height: 20
    }
});

export default GroupPost;
