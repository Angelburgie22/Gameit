import React, {useEffect, useState} from "react";
import {Image, FlatList, View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import prueba, { tweets } from "../datos/Prueba";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Tweets = () => {
    const navigation = useNavigation();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://gameit-d77d4db89096.herokuapp.com/api/post/get_posts")
        .then((response) => {
            console.log("Response:", response.data); // Print the response data
            setPosts(response.data.posts);
        })
        .catch((err) => console.log(err));
    }, []);

    const resderUserCard = ({item})=>{
        const user_id = item.user_id;

        return(
            <View  style = {{paddingTop: 10, backgroundColor: "#4F4F4F", borderRadius: 10, flex : 1, width: "95%", alignSelf: "center"}}>
                <View style = {{flexDirection: "row"}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Perfil", { user_id })}>
                    <View style = {{padding: 10}}>
                        <Image style = {styles.image} source={{uri : item.photo_url}}/>
                    </View>
                    </TouchableOpacity>
                    <View>
                        <Text style = {styles.name}>{item.name}</Text>
                        <Text style = {{color : "gray"}}>{item.username}</Text>
                    </View>
                </View>
                <View style = {{paddingBottom: 7, flex: 1}}>
                    <Text style = {styles.contentxt}>{item.post.text}</Text> 
                </View>
                <View style = {{flexDirection: "row", justifyContent: "space-around"}}>
                    <View style= {{flexDirection: "row"}}>
                        <TouchableOpacity>
                            <Text style = {styles.text}>Likes: </Text>             
                        </TouchableOpacity>
                        <Text style = {styles.text}>{item.post.votes_count}</Text>  
                    </View>
                    <View style= {{flexDirection: "row"}}>
                        <TouchableOpacity onPress={() => navigation.navigate("Comentarios")}>
                            <Text style = {styles.text}>Comentarios: </Text>             
                        </TouchableOpacity>
                        <Text style = {styles.text}>{item.post.replies_count}</Text>
                    </View>
                    <View style= {{flexDirection: "row"}}>
                        <TouchableOpacity>
                            <Text style = {styles.text}>Compartidos: </Text>             
                        </TouchableOpacity>
                    <Text style = {styles.text}>{item.post.shares_count}</Text>
                    </View>             
                </View>
                <View style = {{padding: 10}}/>
            </View>
        )
    }

    console.log("Huh: " + posts);
    
    return(
        <FlatList data ={posts}
        keyExtractor={(item) => item}
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