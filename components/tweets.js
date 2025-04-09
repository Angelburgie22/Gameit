import React from "react";
import {
  Image,
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import prueba from "../datos/Prueba";

const Tweets = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={prueba}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item: tweet }) => (
        <View style={styles.tweetContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
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
            <TouchableOpacity onPress={() => navigation.navigate("Comentarios")} style={styles.footerItem}>
              <Text style={styles.footerLabel}>💬 {tweet.replyCount}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem}>
              <Text style={styles.footerLabel}>🔁 {tweet.retweetCount}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem}>
              <Text style={styles.footerLabel}>❤️ {tweet.likeCount}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  tweetContainer: {
    backgroundColor: "#1C1C1E",
    padding: 12,
    borderRadius: 12,
    marginHorizontal: 10,
  },
  separator: {
    height: 10,
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
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 5,
  },
  screenName: {
    color: "#A9A9A9",
    fontSize: 14,
  },
  content: {
    marginTop: 8,
    marginBottom: 10,
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  footerItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerLabel: {
    color: "#A9A9A9",
    fontSize: 14,
  },
});

export default Tweets;
