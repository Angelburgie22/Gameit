import React from 'react';
import { Alert, View, Text, TextInput, ScrollView, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import Result from '../components/Community';

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
                <Result/>
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