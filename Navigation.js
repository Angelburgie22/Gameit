import react from "react";
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//pantarijillas
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import GroupScreen from "./screens/GroupScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Coments from "./screens/stack/Coments";
import Results from "./screens/ResultsScreen";
import CommunityScreen from "./screens/CommunityScreen";
import OtherProfiles from "./components/profile/otherprofiles";
//iconos
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
const StackNavigator = createNativeStackNavigator();

function StackScreens(){
    return(
        <StackNavigator.Navigator screenOptions={{
            headerStyle: {backgroundColor: "#2B2B2B",}, headerTintColor: 'white'
        }}>
            <StackNavigator.Screen name = 'home' component={Tabs}
            options={{
                headerShown:  false
            }}/>
            <StackNavigator.Screen name = 'Perfil' component={OtherProfiles} 
            options={{
                statusBarColor:  "gray",
                headerBackTitleVisible: false
            }}/>
            <StackNavigator.Screen name = 'Comentarios' component={Coments} 
            options={{
                statusBarColor:  "gray",
                headerBackTitleVisible: false,
                presentation: "modal"
            }}/>  
            <StackNavigator.Screen name = 'Resultados' component={Results} 
            options={{
                statusBarColor:  "gray",
                headerBackTitleVisible: false,
            }}/> 
            <StackNavigator.Screen name = 'Comunidad' component={CommunityScreen} 
            options={{
                statusBarColor:  "gray",
                headerBackTitleVisible: false,
            }}/>               

        </StackNavigator.Navigator>
    )
}

function Tabs(){
    return(
        <Tab.Navigator initialRouteName="Inicio" 
        screenOptions={{tabBarActiveBackgroundColor: 'gray', 
        tabBarActiveTintColor: 'white', tabBarStyle: {backgroundColor: "#2B2B2B",}, 
        headerStyle: {backgroundColor: "#2B2B2B",}, headerTintColor: 'white'}} >
            <Tab.Screen name = "Inicio" component={HomeScreen}
            options={{
                tabBarIcon: ({color, size}) => (
                    <Entypo name="home" size={24} color="white" />
                )
                }}/>
            <Tab.Screen name = "Buscar" component={SearchScreen}
            options={{
                tabBarIcon: ({color, size}) => (
                    <Entypo name="magnifying-glass" size={24} color="white" />
                )
                }}            
            />
            <Tab.Screen name = "Grupos" component={GroupScreen}
            options={{
                tabBarIcon: ({color, size}) => (
                    <Entypo name="game-controller" size={24} color="white" />
                )
                }}                
            />
            <Tab.Screen name = "Chat" component={ChatScreen}
            options={{
                tabBarBadge: '10',
                tabBarIcon: ({color, size}) => (
                    <Entypo name="message" size={24} color="white" />
                )
                }} 
            />
            <Tab.Screen name = "Mi Perfil" component={ProfileScreen}
            options={{
                tabBarIcon: ({color, size}) => (
                    <FontAwesome name="user-circle-o" size={24} color="white" />
                )
                }} 
            />
        </Tab.Navigator>
    );
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <StackScreens/>
        </NavigationContainer>

    );
}