import React, {useEffect, useState} from "react";
import axios from "axios";
import {Image, FlatList, Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import Communitys from "../../datos/Communitys";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


const ResultC = () => {
    const navigation = useNavigation();
    const [users,setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => setUsers(response.data)).catch((err) => console.log(err))
    },[]);

    const resderCRCard = ({item})=>{
        return(
            <TouchableOpacity onPress={() => navigation.navigate("Comunidad")}>
            <View style = {{backgroundColor: "#4F4F4F", width: "90%", alignSelf: "center", height: 60, borderRadius: 10}}>
                <View style = {{flexDirection: "row"}}>
                    <View style ={{padding: 10}}>
                        <Image style = {styles.image}source={{uri : "https://i.pinimg.com/564x/0c/bb/aa/0cbbaab0deff7f188a7762d9569bf1b3.jpg"}} ></Image>
                    </View>
                    <View style = {{justifyContent: 'center'}}>
                        <Text style = {styles.text}>{item.name}</Text>
                        <Text style = {styles.description}>{item.email}</Text>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
        )
    }
    return(   
        <FlatList 
        data ={users}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={resderCRCard}/> 
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