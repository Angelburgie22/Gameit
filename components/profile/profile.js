import React from "react";
import {Image, FlatList, Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import Prueba, {Prof} from "../../datos/Prueba";

const Profiles = () => {
    return(
        <View style = {{paddingTop: 10, backgroundColor: "#4F4F4F", borderRadius: 10, flex : 1, width:"85%", alignSelf:"center"}}>
            <View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image : {
        width: 48,
        height: 48,
        borderRadius: 30
    },
    text : {
        color: "#999999",
        fontSize: 12
    },
    name : {
        color: "white",
        fontWeight: "bold",
        fontSize: 15
    }
})


export default Profiles