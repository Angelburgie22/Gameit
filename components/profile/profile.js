import React from "react";
 import {Image, FlatList, Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
 import Prueba, {Prof} from "../../datos/Prueba";
 import { Ionicons } from '@expo/vector-icons';
 import Tweets from "../tweets";
 
 const Profiles = () => {
     return(
        <View style = {{paddingTop: 10, borderRadius: 10, flex : 1}}>
        <View style = {{alignSelf : 'center'}}>
            <Image style = {styles.image} source={{uri : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8f7ad4f3-ee4e-46ba-8aae-2242f891b85c/deswn27-69d5ec99-e25d-4313-bdf4-b259d963a120.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhmN2FkNGYzLWVlNGUtNDZiYS04YWFlLTIyNDJmODkxYjg1Y1wvZGVzd24yNy02OWQ1ZWM5OS1lMjVkLTQzMTMtYmRmNC1iMjU5ZDk2M2ExMjAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7qCs0Rg0xd0TfcClgu2ch-hu8utvE4J_J4lCVGv0FQ0"}}></Image>
        </View>
        <View style = {{alignSelf: "center"}}>
            <Text style = {styles.name}>Goku_Pro888</Text>
        </View>
        <View style = {{alignSelf: "center"}}>
            <Text style = {styles.text}>@GustavoGamer</Text>
        </View>
        <View style = {{flexDirection : 'row', justifyContent: 'space-around', marginTop: 10}}>
            <View>
                <View style = {{alignSelf : 'center'}}>
                    <Text style = {styles.name}>Seguidores</Text>
                </View>
                <View style = {{alignSelf : 'center'}}>
                    <Text style = {styles.text}>0</Text>
                </View>
            </View>
            <View>
                <View style = {{alignSelf : 'center'}}>
                    <Text style = {styles.name}>Siguiendo</Text>
                </View>
                <View style = {{alignSelf : 'center'}}>
                    <Text style = {styles.text}>0</Text>
                </View>
            </View>
        </View>
        <View style = {{marginTop : 10}}>
            <Tweets></Tweets>
        </View>
    </View>
)
}

const styles = StyleSheet.create({
text : {
    color: "white",
    fontSize: 13
},
name : {
    color: "white",
    fontWeight: "bold",
    fontSize: 18
},
image : {
    height : 150,
    width : 150,
    borderRadius : 100
},

imagepost : {
    width: 48,
    height: 48,
    borderRadius: 30
},
namepost : {
    fontSize: 18,
    color: "white"
},

contentxt : {
    color : "white",
    fontWeight: "bold"
},
subname : {
    color : "white"
}
})

export default Profiles