import React from 'react';
import { Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Tweets from '../components/tweets';
const HomeScreen = () => {
    return(
        <View style = {{backgroundColor : "#404040", flex : 1}}>
            <View style = {{marginTop: 20}}>
                <Tweets/>
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