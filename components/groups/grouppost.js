import React from "react";
import {Image, FlatList, Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import Prueba, {Groups} from "../../datos/Prueba";

const GroupPost = () => {
    return(
        <FlatList
        data = {Prueba}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({item : groups}) => (
            <View key = {groups.id} style = {{paddingTop: 10, backgroundColor: "#4F4F4F", borderRadius: 10, flex : 1, width:"85%", alignSelf:"center"}}>
                <View style = {{flexDirection: "row"}}>
                    <View style = {{padding: 10}}>
                        <Image style = {styles.image} source={{uri : groups.avatar}}/>
                    </View>
                    <View>
                        <Text style = {styles.name}>{groups.name}</Text>
                        <Text style = {{color : "gray"}}>{groups.screenName}</Text>
                    </View>
                </View>
                <View>
                    <Image  style = {styles.post} source={{uri : groups.avatar}}/>
                </View>
                <View style = {{flexDirection: "row", justifyContent: "space-around"}}>
                    <TouchableOpacity style = {styles.Buttons}>
                        <Text style = {styles.TextButton}>Unirse a Grupo</Text>
                    </TouchableOpacity>
                    <View style>
                        <Text style = {styles.TextButton}>{groups.players} / 4</Text>
                    </View>
                </View>
                <View style={{height: 28}}>
                    
                </View>
            </View>
        
        )}/>
            
        

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