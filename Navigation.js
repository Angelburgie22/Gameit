import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//pantarijillas
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import GroupScreen from "./screens/GroupScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";
//iconos
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

function Tabs(){
    return(
        <Tab.Navigator initialRouteName="Home" 
        screenOptions={{tabBarActiveBackgroundColor: 'gray', 
        tabBarActiveTintColor: 'white', tabBarStyle: {backgroundColor: "#2B2B2B",}, 
        headerStyle: {backgroundColor: "#2B2B2B",}, headerTintColor: 'white'}} >
            <Tab.Screen name = "Home" component={HomeScreen}
            options={{
                tabBarIcon: ({color,size}) => (
                    <MaterialCommunityIcons name="home" size={24} color="black" />
                ),
                }}/>
            <Tab.Screen name = "Search" component={SearchScreen}
            options={{
                tabBarIcon: ({color,size}) => (
                    <MaterialCommunityIcons name="magnify" size={24} color="black" />
                )
                }}            
            />
            <Tab.Screen name = "Grupos" component={GroupScreen}
              
            />
            <Tab.Screen name = "chat" component={ChatScreen}
            options={{
                tabBarIcon: ({color,size}) => (
                    <MaterialCommunityIcons name="chat-processing" size={24} color="black" />
                ),
                tabBarBadge: '10'
                }} 
            />
            <Tab.Screen name = "Profile" component={ProfileScreen}
            options={{
                tabBarIcon: ({color,size}) => (
                    <MaterialCommunityIcons name="account-eye-outline" size={24} color="black" />
                ),
                }} 
            />
        </Tab.Navigator>
    );
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>

    );
}