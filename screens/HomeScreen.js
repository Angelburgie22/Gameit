import React from 'react';
import { Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = () => {
    return(
        <View style = {{backgroundColor : "#4F4F4F", flex : 1}}>
            <View style = {{flexDirection : "row", justifyContent: "space-around"}}>
            <TouchableOpacity style = {styles.Buttons}>
                <Text style = {styles.Text}>Todo</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.Buttons}>
                <Text style = {styles.Text}>VideoJuegos</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.Buttons}>
                <Text style = {styles.Text}>Comunidades</Text>
            </TouchableOpacity>       
            </View>    
        </View>
    );
};

const styles = StyleSheet.create({
    Buttons:{
        backgroundColor: "#31CE40",
        borderRadius:10,
        width: "30%",
        marginTop: "3%",
        
    },
    Text:{
        color: "white",
        borderColor: "black",
        textAlign: "center",
        padding: 10,
    },
    Share:
    {
        backgroundColor: "black",
        width: "30%",
        justifyContent: "center"
        
    },
});
export default HomeScreen;