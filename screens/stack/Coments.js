import React from 'react';
import { Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Tweets from '../../components/tweets';

const Coments = () => {
    return(
        <View style = {{backgroundColor : "#404040", flex : 1}}>
            <Tweets/>
            <View style = {{flexDirection: "row", justifyContent: "space-around"}}>
                    <TextInput
                        style={styles.input}
                        color = "white"
                        placeholder="Comentar"
                        placeholderTextColor="#999999"
                    />
            </View>    
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 350,
        padding: 5,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        marginTop: "3%",
      }
})
export default Coments;