import React, {useEffect, useState} from "react";
import axios from "axios";
import {Image, FlatList, Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import Prueba, {Groups} from "../../datos/Prueba";

const GroupPost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://gameit-d77d4db89096.herokuapp.com/api/post/get_posts")
        .then((response) => setUsers(response.data)).catch((err) => console.log(err))
    },[]);

    const resderGroupCard = ({item})=>{
        return(
            <View style = {{paddingTop: 10, backgroundColor: "#4F4F4F", borderRadius: 10, flex : 1, width:"85%", alignSelf:"center"}}>
                <View style = {{flexDirection: "row"}}>
                    <View style = {{padding: 10}}>
                        <Image style = {styles.image} source={{uri : item.photo_url }}/>
                    </View>
                    <View>
                        <Text style = {styles.name}>{ item.user }</Text>
                        <Text style = {{color : "gray"}}>{ item.username }</Text>
                    </View>
                </View>
                <View>
                    <Image  style = {styles.post} source={{uri : "https://i.pinimg.com/564x/0c/bb/aa/0cbbaab0deff7f188a7762d9569bf1b3.jpg"}}/>
                </View>
                <View style = {{flexDirection: "row", justifyContent: "space-around"}}>
                    <TouchableOpacity style = {styles.Buttons}>
                        <Text style = {styles.TextButton}>Unirse a Grupo</Text>
                    </TouchableOpacity>
                    <View style>
                        <Text style = {styles.TextButton}>{item.id} / 4</Text>
                    </View>
                </View>
                <View style={{height: 28}}>
                    
                </View>
            </View>
        )
    }
    return(
        <FlatList 
        data ={posts}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={resderGroupCard}/>
            
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
    },
    post : {
        width: 200,
        height: 200,
        alignSelf: "center",
        padding: 10
    },
    Buttons:{
        backgroundColor: "#31CE40",
        borderRadius:3,
        width: "40%",
        height: 30,
        marginTop: "3%",
    },
    TextButton:{
        color: "white",
        borderColor: "black",
        textAlign: "center",
        padding: 10,
    }



})

export default GroupPost