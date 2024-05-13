import React from 'react';
import { Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import Trending from '../components/trending';

const SearchScreen = () => {
    return(
        <View style = {{backgroundColor : "#404040", flex : 1}}>
            <View style = {{alignSelf: "center", padding: 10}}>
                <TextInput
                    style={styles.input}
                    color = "white"
                    placeholder="Buscar"
                    placeholderTextColor="#999999"
                    secureTextEntry
                />               
            </View> 
            <View style = {{padding: 10}}>
                <Text style = {{fontSize: 20, color : "white", fontWeight: "bold"}}>Tendencias</Text>
            </View>
            <View>
                <Trending/>
            </View>                     
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 370,
        padding: 5,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
      }
})


export default SearchScreen;