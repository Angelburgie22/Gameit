import React from 'react';
import { Alert, View, Text, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import Profiles from '../components/profile/profile';

const ProfileScreen = () => {
    return(
        <View style = {{backgroundColor : "#404040", flex : 1}}>
            <View>
                <Profiles/>
            </View>
        </View>
    );
};


export default ProfileScreen;