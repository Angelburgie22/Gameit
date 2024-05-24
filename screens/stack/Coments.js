import React from 'react';
import { Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Tweets from '../../components/tweets';

const Coments = () => {
    return(
        <View style = {{backgroundColor : "#404040", flex : 1}}>
            <Tweets/>
        </View>
    );
};
export default Coments;