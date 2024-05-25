import React from "react";
import "react-native-gesture-handler";
import {Image, FlatList, Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import Communitys from "../../datos/Communitys";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


const CommunityPage = () => {
    return(    
        <View style = {{flex: 1}}>
            <View style = {{flexDirection: "row"}}>
                <View style= {{margin: 10}}>
                    <Image style = {styles.image} source={{uri : "https://i.pinimg.com/564x/0c/bb/aa/0cbbaab0deff7f188a7762d9569bf1b3.jpg"}}></Image>
                </View>
                
                <View style={{justifyContent: "center"}}>
                    <View>
                        <Text style= {styles.text}>Comunidad Nombre</Text>
                    </View>
                    <View>
                        <Text style = {styles.description}>0 Seguidores</Text>
                    </View>
                </View>
                <View style={{justifyContent: "center", marginLeft: 100}}>
                    <TouchableOpacity style={styles.Buttons}>
                        <Text style = {styles.text}>
                            Unirse
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style = {styles.description}>Descripcion de comunidad</Text>
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
        marginLeft: 8,
        fontWeight: 'bold',
    },
    description:{
        color: "white",
        marginLeft: 8,
    },
    Buttons:{
        backgroundColor: "#31CE40",
        borderRadius:10,
        width: "110%",
        height: "30%",
        marginTop: "3%",
        justifyContent: "center"
        
    },
})

export default CommunityPage