import React from "react";
import "react-native-gesture-handler";
import {Image, FlatList, Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import Communitys from "../../datos/Communitys";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


const ResultC = () => {
    const navigation = useNavigation();
    return(    
        <View>
            {Communitys.map(com => (
                <TouchableOpacity onPress={() => navigation.navigate("Comunidad")}>
                <View key = {com.id} style = {{backgroundColor: "#4F4F4F", marginBottom: 15, width: "90%", alignSelf: "center", height: 60, borderRadius: 10}}>
                    <View style = {{flexDirection: "row"}}>
                        <View style ={{padding: 10}}>
                            <Image style = {styles.image}source={{uri : com.icon}} ></Image>
                        </View>
                        <View style = {{justifyContent: 'center'}}>
                            <Text style = {styles.text}>{com.name}</Text>
                            <Text style = {styles.description}>{com.description}</Text>
                        </View>
                    </View>
                </View>
                </TouchableOpacity>
            ))}

        </View>
    )
}


const styles = StyleSheet.create({
    image : {
        width: 48,
        height: 48,
        borderRadius: 30,
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