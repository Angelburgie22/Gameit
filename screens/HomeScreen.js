import React, { useState, useEffect } from 'react'; // Agregué useEffect, aunque no parece ser el problema inmediato
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'; // Agregué Image
import Tweets from '../components/tweets';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [loggedInUser, setLoggedInUser] = useState(null); // Para obtener información del usuario logueado

  useEffect(() => {
    const getLoggedInUser = async () => {
      try {
        const user = await AsyncStorage.getItem('@loggedInUser');
        if (user) {
          setLoggedInUser(JSON.parse(user));
        }
      } catch (error) {
        console.error("Error getting logged in user", error);
      }
    };
    getLoggedInUser();
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tweetsContainer}>
        <Tweets />
      </View>
    </SafeAreaView>
  );
};

const TweetItem = ({ tweet }) => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(tweet.likeCount);

  const toggleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <View style={styles.tweetContainer}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            // console.log("Navegando a perfil con userId:", tweet.screenName); // Agregué este console.log
            if (tweet.user?.username)
            {
              navigation.navigate('OtherProfiles', { userId: tweet.user.username });
            }
            else{
               navigation.navigate('OtherProfiles', { userId: tweet.screenName });
            }
          }}
        >
          <Image style={styles.avatar} source={{ uri: tweet.user?.avatar || "https://i.pravatar.cc/48" }} />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{tweet.user?.name || tweet.name}</Text>
          <Text style={styles.screenName}>@{tweet.user?.username || tweet.screenName}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>{tweet.fullText}</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Comentarios")}
          style={styles.footerItem}
        >
          <Icon name="message-circle" size={18} color="#A9A9A9" />
          <Text style={styles.footerLabel}> {tweet.replyCount}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <Icon name="repeat" size={18} color="#A9A9A9" />
          <Text style={styles.footerLabel}> {tweet.retweetCount}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleLike} style={styles.footerItem}>
          <Icon
            name="heart"
            size={18}
            color={liked ? "#E0245E" : "#A9A9A9"}
          />
          <Text style={[styles.footerLabel, liked && { color: "#E0245E" }]}>
            {" "}
            {likeCount}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  tweetsContainer: {
    flex: 1,
    padding: 10,
  },
  tweetContainer: {
    backgroundColor: "#1C1C1E",
    padding: 14,
    borderRadius: 12,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    marginBottom: 10
  },
  separator: {
    height: 12,
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

export default HomeScreen;

