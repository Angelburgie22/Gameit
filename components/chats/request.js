import React from "react";
import {Image, FlatList, Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import Prueba, {request} from "../../datos/Prueba";

const Request = () => {
    return(
        <FlatList
        data ={Prueba}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({item : request}) => (
            <View key = {request.id}>
                <View style = {{flexDirection: "row"}}>
                    <View style = {{paddingRight: 5}}>
                        <Image style = {styles.image} source={{uri : request.avatar}}></Image>
                    </View>
                    <View>
                        <Text style = {styles.name}>{request.name}</Text>
                        <View style= {{flexDirection: "row"}}>
                            <Text style = {styles.text}>{request.lastmsg}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )}
        />
    )
}


const styles = StyleSheet.create({
    image : {
        width: 48,
        height: 48,
        borderRadius: 30
    },
    text : {
        color: "#999999",
        fontSize: 12
    },
    name : {
        color: "white",
        fontWeight: "bold",
        fontSize: 15
    }
})

export default Request