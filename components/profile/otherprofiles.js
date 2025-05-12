import React, { useState, useEffect } from 'react';
import { Alert, View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/core';
import Tweets from '../tweets';

const OtherProfiles = () => {
  const [user, setUser] = useState(null);
  const [userTweets, setUserTweets] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const { userId } = route.params || { userId: null }; // Manejar undefined route.params

  useEffect(() => {
    const loadUserProfile = async () => {
      if (!userId) {
        Alert.alert('Error', 'No se proporcionó el ID de usuario.');
        return; // Detener la carga si no hay userId
      }

      try {
        const storedUser = await AsyncStorage.getItem(`@user_${userId}`);
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);

          const allTweets = await AsyncStorage.getItem('@tweets');
          if (allTweets) {
            const parsedTweets = JSON.parse(allTweets);
            const filteredTweets = parsedTweets.filter(
              (tweet) => tweet.screenName === parsedUser.username
            );
            setUserTweets(filteredTweets);
          } else {
            setUserTweets([]);
          }
        } else {
          Alert.alert('Error', 'Usuario no encontrado.'); // Mostrar alerta si no se encuentra el usuario
          setUser(null); // Establecer user en null para que no se quede en loading infinito
        }
      } catch (error) {
        console.error('Error loading profile:', error);
        Alert.alert('Error', 'Failed to load profile data.');
      }
    };

    loadUserProfile();
  }, [userId]);

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
      </View>

      <View style={styles.tweetsContainer}>
        <Text style={styles.yourTweetsTitle}>Tweets de {user.username}</Text>
        <Tweets tweets={userTweets} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#404040',
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
  separator: {
    height: 12,
  },
  tweetContainer: {
    backgroundColor: "#1C1C1E",
    padding: 14,
    borderRadius: 12,
    marginHorizontal: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    marginBottom: 10
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 10,
  },
  userInfo: {
    flexDirection: "column",
  },
  name: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  screenName: {
    color: "#A9A9A9",
    fontSize: 14,
  },
  content: {
    marginTop: 8,
  },
  text: {
    color: "#E5E5E5",
    fontSize: 16,
    lineHeight: 22,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  footerItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerLabel: {
    color: "#B0B0B0",
    fontSize: 14,
  },
});

export default OtherProfiles
