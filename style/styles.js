import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#333333',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#444444',
    borderRadius: 5,
    paddingLeft: 10,
    color: 'white',
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderRadius: 4,
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#34C759',  // color verde
    borderColor: '#34C759',  // color verde
  },
  unchecked: {
    backgroundColor: 'transparent',
    borderColor: '#888888',
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#34C759',  // color verde
    width: '80%',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  registertext: {
    color: '#34C759',  // color verde
    fontSize: 16,
  },
});

export default styles;