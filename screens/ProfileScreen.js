import React from 'react';
import { Alert, View, Text, ScrollView, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import Profiles from '../components/profile/profile';

const ProfileScreen = () => {
    return(
        <View style = {{backgroundColor : "#404040", flex : 1}}>
                <Profiles/>
        </View>
    );
};


export default ProfileScreen;