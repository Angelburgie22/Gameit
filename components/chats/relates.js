import React, {useEffect, useState} from "react";
import axios from "axios";
import {Image, FlatList, Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import Prueba, {relates} from "../../datos/Prueba";

const Relates = () => {

        return(
            <View>
                <View style = {{flexDirection: "row"}}>
                        <View style = {{paddingRight: 5}}>
                            <Image style = {styles.image} source={{uri : "https://static.wikia.nocookie.net/pou/images/8/8d/Pou.png/revision/latest/thumbnail/width/360/height/360?cb=20220622133315"}}></Image>
                        </View>
                        <View>
                            <Text style = {styles.name}>Pedro</Text>
                        <View style= {{flexDirection: "row"}}>
                            <Text style = {styles.text}>Un uve?</Text>
                        </View>
                    </View>
                </View>
            </View>
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