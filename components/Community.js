import React from "react";
import {Image, FlatList, Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import prueba, { tweets } from "../datos/Prueba";

const Result = () => {
    return(
        <FlatList data ={prueba}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({item : tweets}) => (
            <View key = {tweets.id} style = {{paddingTop: 10, backgroundColor: "#4F4F4F", borderRadius: 10, flex : 1, width: "95%", alignSelf: "center"}}>
                <View style = {{flexDirection: "row"}}>
                    <TouchableOpacity onPress={() => navigation.navigate("profile")}>
                    <View style = {{padding: 10}}>
                        <Image style = {styles.image} source={{uri : tweets.avatar}}/>
                    </View>
                    </TouchableOpacity>
                    <View>
                        <Text style = {styles.name}>{tweets.name}</Text>
                        <Text style = {{color : "gray"}}>{tweets.screenName}</Text>
                    </View>
                </View>
                <View style = {{paddingBottom: 7, flex: 1}}>
                    <Text style = {styles.contentxt}>{tweets.fullText}</Text>
                </View>
                <View style = {{flexDirection: "row", justifyContent: "space-around"}}>
                    <View style= {{flexDirection: "row"}}>
                        <TouchableOpacity>
                            <Text style = {styles.text}>Likes: </Text>             
                        </TouchableOpacity>
                        <Text style = {styles.text}>{tweets.likeCount}</Text>
                    </View>
                    <View style= {{flexDirection: "row"}}>
                        <TouchableOpacity onPress={() => navigation.navigate("coment")}>
                            <Text style = {styles.text}>Comentarios: </Text>             
                        </TouchableOpacity>
                        <Text style = {styles.text}>{tweets.replyCount}</Text>
                    </View>
                    <View style= {{flexDirection: "row"}}>
                        <TouchableOpacity>
                            <Text style = {styles.text}>Compartidos: </Text>             
                        </TouchableOpacity>
                    <Text style = {styles.text}>{tweets.retweetCount}</Text>
                    </View>             
                </View>
                <View style = {{padding: 10}}/>
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
    }
})

export default Result