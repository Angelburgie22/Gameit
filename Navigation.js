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
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

function Tabs(){
    return(
        <Tab.Navigator initialRouteName="Home" 
        screenOptions={{tabBarActiveBackgroundColor: 'gray', 
        tabBarActiveTintColor: 'white', tabBarStyle: {backgroundColor: "#2B2B2B",}, 
        headerStyle: {backgroundColor: "#2B2B2B",}, headerTintColor: 'white'}} >
            <Tab.Screen name = "Home" component={HomeScreen}
            options={{
                }}/>
            <Tab.Screen name = "Search" component={SearchScreen}
            options={{
                }}            
            />
            <Tab.Screen name = "Grupos" component={GroupScreen}
              
            />
            <Tab.Screen name = "chat" component={ChatScreen}
            options={{
                tabBarBadge: '10'
                }} 
            />
            <Tab.Screen name = "Profile" component={ProfileScreen}
            options={{
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