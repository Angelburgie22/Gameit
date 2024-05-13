import React from "react";
import {Image, FlatList, Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import prueba, { tweets } from "../datos/Prueba";
import trending, {tren} from "../datos/trending";

const Trending = () => {
    return(
        <FlatList 
        data = {trending}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({item : trend}) => (
            <View key = {trend.id} style = {{backgroundColor: "#4F4F4F"}}>
                <View style = {{flexDirection: "row"}}>
                    <View style ={{padding: 10}}>
                    <Image style = {styles.image}source={{uri : trend.photo}} ></Image>
                    </View>
                    <View style = {{justifyContent: "center"}}>
                    <Text style = {styles.text}>{trend.name}</Text>
                    </View>
                </View>
            </View>
        )}
        />
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