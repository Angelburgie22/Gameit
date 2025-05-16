import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CommunityPage from '../components/communitys/communitypage';
import Tweets from '../components/tweets';

const CommunityScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#121212' }}>
            <Tweets
                // Si quieres poner el header con la comunidad
                ListHeaderComponent={<CommunityPage />}
            />
        </View>
    );
};

export default CommunityScreen;
