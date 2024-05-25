import React from 'react';
import { Alert, View, Text, TextInput, ScrollView, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import ResultC from '../components/results/Community';
import GroupPost from '../components/groups/grouppost';
import { SafeAreaView } from 'react-native-safe-area-context';

const Results = () => {
    return(
        <View style = {{backgroundColor : "#404040", flex : 1}}>
            <View style = {{flexDirection: "row", justifyContent: "space-around"}}>
                    <TextInput
                        style={styles.input}
                        color = "white"
                        placeholder="Buscar"
                        placeholderTextColor="#999999"
                    />               

                    <TouchableOpacity style = {styles.Buttons}>
                        <Text style = {styles.Text}>Buscar</Text>
                    </TouchableOpacity>

            </View>  
            <ScrollView>
                <View style = {{padding: 10}}>
                    <Text style = {{fontSize: 20, color : "white", fontWeight: "bold"}}>Comunidades</Text>
                </View>
                <ResultC/>
                <View style = {{padding: 10}}>
                    <Text style = {{fontSize: 20, color : "white", fontWeight: "bold"}}>Grupos de juego</Text>
                </View>
                <GroupPost/>
            </ScrollView>          
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 300,
        padding: 5,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        marginTop: "3%",
      },
      Buttons:{
        backgroundColor: "white",
        borderRadius:10,
        width: "20%",
        height: "60%",
        marginTop: "3%",
    },
    Text:{
        backgroundColor: "Black",
        borderColor: "black",
        textAlign: "center",
        padding: 10,
    }
})


export default Results;