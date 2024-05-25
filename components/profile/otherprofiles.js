import React from "react";
import {Image, FlatList, Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import Prueba, {Prof} from "../../datos/Prueba";
import { Ionicons } from '@expo/vector-icons';
import Tweets from "../tweets";

const OtherProfiles = () => {
    return(
        <View style = {{flex: 1,backgroundColor : "#404040"}}>
            <View style= {{flexDirection: "row"}}>
                <View style = {{margin: 10}}>
                    <Image style={styles.image} source={{uri : "https://i.pinimg.com/564x/0c/bb/aa/0cbbaab0deff7f188a7762d9569bf1b3.jpg"}}></Image>
                </View>
                <View style = {{justifyContent: "center", marginRight: 150}}>
                    <View>
                        <Text style = {styles.name}> Nombre</Text>
                    </View>
                    <View>
                        <Text style = {styles.text}> @Usuario</Text>
                    </View>
                </View>
                <View style = {{justifyContent: "center"}}>
                    <TouchableOpacity style={styles.Buttons}>
                        <Text style = {styles.text}>
                            Seguir
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style = {{flexDirection : 'row', justifyContent: 'space-around', marginTop: 10}}>
                <View>
                    <View style = {{alignSelf : 'center'}}>
                        <Text style = {styles.name}>Seguidores</Text>
                    </View>
                    <View style = {{alignSelf : 'center'}}>
                        <Text style = {styles.text}>0</Text>
                    </View>
                </View>
                <View>
                    <View style = {{alignSelf : 'center'}}>
                        <Text style = {styles.name}>Siguiendo</Text>
                    </View>
                    <View style = {{alignSelf : 'center'}}>
                        <Text style = {styles.text}>0</Text>
                    </View>
                </View>
            </View>
            <View style = {{marginTop: 10}}>
                <Tweets/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image : {
        width: 75,
        height: 75,
        borderRadius: 50,
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
        textAlign: "center"
    },
    Buttons:{
        backgroundColor: "#31CE40",
        borderRadius:10,
        marginTop: "3%",
        width: 50,
        height: 30,
        justifyContent: "center"
        
    },
})

export default OtherProfiles