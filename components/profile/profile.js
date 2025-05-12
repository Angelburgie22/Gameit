import React, { useState, useEffect } from 'react';
import { Alert, View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Tweets from '../tweets';

const ProfileScreen = () => {
  const [user, setUser] = useState(null);
  const [userTweets, setUserTweets] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        const loggedInUser = await AsyncStorage.getItem('@loggedInUser');
        const allTweets = await AsyncStorage.getItem('@tweets');

        if (loggedInUser) {
          const parsedUser = JSON.parse(loggedInUser);
          setUser(parsedUser);

          if (allTweets) {
            const parsedTweets = JSON.parse(allTweets);
            // Filtra los tweets para obtener solo los del usuario actual
            const filteredTweets = parsedTweets.filter(
              (tweet) => tweet.screenName === parsedUser.username
            );
            setUserTweets(filteredTweets);
          } else {
            setUserTweets([]);
          }
        }
      } catch (error) {
        console.error('Error loading profile:', error);
        Alert.alert('Error', 'Failed to load profile data.');
      }
    };

    loadUserProfile();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('@loggedInUser');
      navigation.navigate('login'); 
      Alert.alert('Sesión cerrada', 'Has cerrado sesión correctamente.');
    } catch (error) {
      console.error('Error logging out:', error);
      Alert.alert('Error', 'Failed to log out.');
    }
  };

  if (!user) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading profile...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.image} source={{ uri: user.avatar || "https://i.pravatar.cc/150?img=68" }} />
        <Text style={styles.name}>{user.username}</Text>
        <Text style={styles.text}>@{user.username}</Text>
        <View style={styles.followContainer}>
          <View style={styles.followItem}>
            <Text style={styles.name}>Followers</Text>
            <Text style={styles.text}>0</Text>
          </View>
          <View style={styles.followItem}>
            <Text style={styles.name}>Following</Text>
            <Text style={styles.text}>0</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tweetsContainer}>
        <Text style={styles.yourTweetsTitle}>Tus Publicaciones</Text>
        <Tweets tweets={userTweets} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e1e1e',
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#404040',
  },
  loadingText: {
    color: 'white',
    fontSize: 18,
  },
  profileContainer: {
    paddingTop: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  text: {
    color: 'white',
    fontSize: 13,
  },
  followContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    width: '80%',
  },
  followItem: {
    alignItems: 'center',
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#E0245E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tweetsContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
    flex: 1
  },
  yourTweetsTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  noTweetsText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ProfileScreen;
