import React, { useState, useEffect } from "react";
import {
  Image,
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TweetComposer from "./tweetComposer";

const STORAGE_KEY = "@tweets";

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
        <TouchableOpacity onPress={() => navigation.navigate("OtherProfiles")}>
          <Image style={styles.avatar} source={{ uri: tweet.avatar }} />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{tweet.name}</Text>
          <Text style={styles.screenName}>@{tweet.screenName}</Text>
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

const Tweets = ({ tweets: propTweets, userId }) => { // Agregamos userId como prop
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const loadTweets = async () => {
      try {
        if (propTweets) {
          setTweets(propTweets);
        } else {
          const storedTweets = await AsyncStorage.getItem(STORAGE_KEY);
          if (storedTweets !== null) {
            const parsedTweets = JSON.parse(storedTweets);
            if (userId) { // Si se proporciona userId, filtrar los tweets
              const filteredTweets = parsedTweets.filter(tweet => tweet.screenName === userId);
              setTweets(filteredTweets);
            } else {
              setTweets(parsedTweets);
            }
          } else {
            setTweets([]);
          }
        }
      } catch (error) {
        console.error("Error cargando tweets:", error);
      }
    };

    loadTweets();
  }, [propTweets, userId]); // Agregamos userId como dependencia

  useEffect(() => {
    const saveTweets = async () => {
      try {
        if (!propTweets) {
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tweets));
        }
      } catch (error) {
        console.error("Error guardando tweets:", error);
      }
    };
    saveTweets();
  }, [tweets, propTweets]);

  const handleNewTweet = (newTweet) => {
    setTweets([newTweet, ...tweets]);
  };

    if (propTweets) {
        return (
            <FlatList
                data={propTweets}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderItem={({ item }) => <TweetItem tweet={item} />}
            />
        );
    }

  return (
    <FlatList
      data={tweets}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={<TweetComposer onTweet={handleNewTweet} />}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item }) => <TweetItem tweet={item} />}
    />
  );
};

const styles = StyleSheet.create({
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

export default Tweets;
