import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: 30,
        backgroundColor: "#181818",
        flexDirection: "column",
        justifyContent: "space-around"
      },
      title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: "#FFFFFF",
      },
      subtitle: {
        fontSize: 20,
        padding: 10,
        marginBottom: 20,
        color: "#FFFFFF",
      },
      input: {
        height: 40,
        width: 300,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
      },
      button: {
        backgroundColorcolor: "#00CC45",
      },
      text: {
        marginTop: 15,
        color: "#FFFFFF",
      },
      registertext:{
        marginTop: 15,
        color: "#FFFFFF",
        fontWeight: "bold"
      },
      image:{
        marginTop: 100,
        height: 200,
        width: 200
      },
      loginButton: {
        backgroundColor: "#00CC45",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        borderWidth: 1,
        width: "80%",
        borderColor: "black",
        alignItems: "center",
        marginBottom: 10
      },
      loginButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
      },
      profileimage : {
        width: 48,
        height: 48,
        borderRadius: 30,
        marginLeft: 15
    },
    text : {
        color: "#999999",
        fontSize: 12
    },
    name : {
        color: "white",
        fontWeight: "bold",
        fontSize: 15
    }
})

export default styles;