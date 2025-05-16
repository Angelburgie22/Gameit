import React from 'react';
import { Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import GroupPost from '../components/groups/grouppost';

const GroupScreen = () => {
    return(
        <View style = {{backgroundColor : "#121212", flex : 1, paddingBottom: 100}}>
            <View style = {{paddingBottom: 20}}>
                <TouchableOpacity style = {styles.Buttons}>
                    <Text style = {styles.Text}>Crear Grupo</Text>
                </TouchableOpacity>
            </View>
            <View>
                <GroupPost/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Buttons:{
        backgroundColor: "#31CE40",
        borderRadius:10,
        width: "90%",
        marginTop: "3%",
        alignSelf: "center",
        
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

export default GroupScreen;