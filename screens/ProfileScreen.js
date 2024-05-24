import React from 'react';
import { Alert, View, Text, ScrollView, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import Profiles from '../components/profile/profile';

const ProfileScreen = () => {
    return(
        <ScrollView style = {{backgroundColor : "#404040", flex : 1}}>
            <View>
                <Profiles/>
            </View>
        </ScrollView>
    );
};


export default ProfileScreen;