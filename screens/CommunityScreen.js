import React from 'react';
import 'react-native-gesture-handler'
import { Alert, View, Text, ScrollView, TextInput, Button, StyleSheet,TouchableOpacity,  TouchableWithoutFeedback} from 'react-native';
import CommunityPage from '../components/communitys/communitypage';
import Tweets from '../components/tweets';

const CommunityScreen = () => {
    return(
        <ScrollView style = {{backgroundColor : "#404040", flex : 1}}>
            <View>
                <CommunityPage/>
            </View>
            <View style = {{marginTop: 20}}>
                <Tweets/>
            </View>
        </ScrollView>
    );
};


export default CommunityScreen;