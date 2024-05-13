import React from "react";
import {Image, FlatList, Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import Prueba, {relates} from "../../datos/Prueba";

const Relates = () => {
    return(
        <FlatList
        data ={Prueba}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({item : relates}) => (
            <View key = {relates.id}>
                <View style = {{flexDirection: "row"}}>
                    <View style = {{paddingRight: 5}}>
                        <Image style = {styles.image} source={{uri : relates.avatar}}></Image>
                    </View>
                    <View>
                        <Text style = {styles.name}>{relates.name}</Text>
                        <View style= {{flexDirection: "row"}}>
                            <Text style = {styles.text}>{relates.lastmsg}</Text>
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

export default Relates