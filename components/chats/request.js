import React, {useEffect, useState} from "react";
import axios from "axios";
import {Image, FlatList, Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import Prueba, {request} from "../../datos/Prueba";
import styles from "../../style/styles";

const Request = () => {
    const [users,setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => setUsers(response.data)).catch((err) => console.log(err))
    },[]);

    const resderRChatCard = ({item})=>{
        return(
            <View>
                <View style = {{flexDirection: "row"}}>
                        <View style = {{paddingRight: 8}}>
                            <Image style = {styles.profileimage} source={{uri : "https://i.pinimg.com/564x/0c/bb/aa/0cbbaab0deff7f188a7762d9569bf1b3.jpg"}}></Image>
                        </View>
                        <View>
                            <Text style = {styles.name}>{item.name}</Text>
                        <View style= {{flexDirection: "row"}}>
                            <Text style = {styles.text}>Quiere conversar</Text>
                        </View>
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
        renderItem={resderRChatCard}/>
    )
}




export default Request