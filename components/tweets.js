import React, {useEffect, useState} from "react";
import {Image, FlatList, View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import prueba, { tweets } from "../datos/Prueba";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";



const Tweets = () => {
    const navigation = useNavigation();
    const [users,setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => setUsers(response.data)).catch((err) => console.log(err))
    },[]);

    const resderUserCard = ({item})=>{
        return(
            <View  style = {{paddingTop: 10, backgroundColor: "#4F4F4F", borderRadius: 10, flex : 1, width: "95%", alignSelf: "center"}}>
                <View style = {{flexDirection: "row"}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
                    <View style = {{padding: 10}}>
                        <Image style = {styles.image} source={{uri : "https://i.pinimg.com/564x/0c/bb/aa/0cbbaab0deff7f188a7762d9569bf1b3.jpg"}}/>
                    </View>
                    </TouchableOpacity>
                    <View>
                        <Text style = {styles.name}>{item.name}</Text>
                        <Text style = {{color : "gray"}}>{item.username}</Text>
                    </View>
                </View>
                <View style = {{paddingBottom: 7, flex: 1}}>
                    <Text style = {styles.contentxt}>{item.email}</Text> 
                </View>
                <View style = {{flexDirection: "row", justifyContent: "space-around"}}>
                    <View style= {{flexDirection: "row"}}>
                        <TouchableOpacity>
                            <Text style = {styles.text}>Likes: </Text>             
                        </TouchableOpacity>
                        <Text style = {styles.text}>{item.id}</Text>  
                    </View>
                    <View style= {{flexDirection: "row"}}>
                        <TouchableOpacity onPress={() => navigation.navigate("Comentarios")}>
                            <Text style = {styles.text}>Comentarios: </Text>             
                        </TouchableOpacity>
                        <Text style = {styles.text}>{item.id}</Text>
                    </View>
                    <View style= {{flexDirection: "row"}}>
                        <TouchableOpacity>
                            <Text style = {styles.text}>Compartidos: </Text>             
                        </TouchableOpacity>
                    <Text style = {styles.text}>{item.id}</Text>
                    </View>             
                </View>
                <View style = {{padding: 10}}/>
            </View>
        )
    }

    return(
        <FlatList data ={users}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={resderUserCard}/>
    )
}

const styles = StyleSheet.create({
    image : {
        width: 48,
        height: 48,
        borderRadius: 30
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
        color : "white"
    }
})

export default Tweets