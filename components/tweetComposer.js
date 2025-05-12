import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Importar AsyncStorage

const TweetComposer = ({ onTweet }) => {
  const [text, setText] = useState("");
  const [currentUser, setCurrentUser] = useState(null); // Estado para el usuario actual

  useEffect(() => {
    const loadCurrentUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('@loggedInUser');
        if (storedUser !== null) {
          setCurrentUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Error cargando usuario logueado:", error);
      }
    };

    loadCurrentUser();
  }, []);

  const handleTweet = () => {
    if (text.trim() === "") return;

    if (!currentUser) {
      alert("Debes iniciar sesión para publicar un tweet.");
      return;
    }

    const newTweet = {
      id: Date.now(),
      avatar: currentUser.avatar || "https://i.pravatar.cc/150?img=68", // Usar el avatar del usuario o uno por defecto
      name: currentUser.username, // Usar el nombre de usuario como "name"
      screenName: currentUser.username, // Usar el nombre de usuario como "screenName"
      fullText: text,
      replyCount: 0,
      retweetCount: 0,
      likeCount: 0,
    };
    onTweet(newTweet);
    setText("");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: currentUser ? currentUser.avatar : "https://i.pravatar.cc/150?img=68" }} // Mostrar el avatar del usuario logueado
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="¿Qué está pasando?"
          placeholderTextColor="#A9A9A9"
          multiline
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.button} onPress={handleTweet}>
          <Text style={styles.buttonText}>Tweetear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: "#1C1C1E",
    borderBottomColor: "#333",
    borderBottomWidth: 1,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 10,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    color: "white",
    fontSize: 16,
    minHeight: 60,
    textAlignVertical: "top",
  },
  button: {
    alignSelf: "flex-end",
    marginTop: 8,
    backgroundColor: "#2ECC71",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default TweetComposer;