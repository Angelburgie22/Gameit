import React, {useEffect, useState} from "react";
import axios from "axios";
import {Image, FlatList, Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import Communitys from "../../datos/Communitys";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


const ResultC = ({ searchText }) => {
    const navigation = useNavigation();
    const filteredData = Communitys.filter(com =>
        com.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <FlatList
            data={filteredData}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: com }) => (
                <TouchableOpacity onPress={() => navigation.navigate("Comunidad")}>
                    <View key={com.id} style={{ backgroundColor: "#222831", width: "95%", alignSelf: "center", height: 70, borderRadius: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ padding: 10 }}>
                                <Image style={styles.image} source={{ uri: com.icon }} />
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={styles.text}>{com.name}</Text>
                                <Text style={styles.description}>{com.description}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};



const styles = StyleSheet.create({
    image : {
        width: 48,
        height: 48,
        borderRadius: 10,
    },
    name : {
        fontSize: 18,
        color: "white"
    },
    contentxt : {
        color : "white",
        fontWeight: "bold"
    },
    text : {
        color : "white",
        marginLeft: 8,
        fontWeight: 'bold'
    },
    description:{
        color: "white",
        marginLeft: 8
    }
})

export default ResultC