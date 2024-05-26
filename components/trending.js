import React, {useEffect, useState}from "react";
import axios from "axios";
import {Image, FlatList, Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import trending, {tren} from "../datos/trending";

const Trending = () => {
    const [users,setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => setUsers(response.data)).catch((err) => console.log(err))
    },[]);

    const resderTrendCard = ({item})=>{
        return(
            <View style = {{backgroundColor: "#4F4F4F"}}>
                <View style = {{flexDirection: "row"}}>
                    <View style ={{padding: 10}}>
                        <Image style = {styles.image}source={{uri : "https://i.pinimg.com/564x/0c/bb/aa/0cbbaab0deff7f188a7762d9569bf1b3.jpg"}} ></Image>
                    </View>
                    <View style = {{justifyContent: "center"}}>
                        <Text style = {styles.text}>{item.name}</Text>
                    </View>
                </View>
            </View>
        )
    }
    return(
        <FlatList 
        data ={users}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={resderTrendCard}/>
    )
}

const styles = StyleSheet.create({
    image : {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    text : {
        color: "white",
        fontWeight: "bold",
        fontSize: 25

    }
})

export default Trending