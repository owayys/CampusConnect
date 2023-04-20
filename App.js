const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import FrameScreen from "./screens/FrameScreen";
import StudyGroupJoinRequests from "./screens/StudyGroupJoinRequests";
import Signup from "./screens/Signup";
import StudyGroupAdminPanel from "./screens/StudyGroupAdminPanel";
import Login from "./screens/Login";
import StudyGroupGC from "./screens/StudyGroupGC";
import OuterChatInterface from "./screens/OuterChatInterface";
import OuterChatInterfaceGroups from "./screens/OuterChatInterfaceGroups";
import UserProfile from "./screens/UserProfile";
import Socials from "./screens/Socials";
import MakeStudyGroup from "./screens/MakeStudyGroup";
import EnterSchedule from "./screens/EnterSchedule";
import InteractiveMap from "./screens/InteractiveMap";
import GroupDescription from "./screens/GroupDescription";
import StudyGroups from "./screens/StudyGroups";
import EventsExtended from "./screens/EventsExtended";
import AddEvent from "./screens/AddEvent";
import Events from "./screens/Events";
import ForumsTabPostSettings from "./screens/ForumsTabPostSettings";
import ForumsTab from "./screens/ForumsTab";
import HomeScreen from "./screens/HomeScreen";
import InnerChatInterface from "./screens/InnerChatInterface";
import SocialsTwo from "./screens/SocialsTwo";
import FriendRequest from "./screens/FriendRequests";
import ViewFriends from "./screens/ViewFriends";
import OuterChatInterfaceTwo from "./screens/OuterChatInterfaceTwo";
import * as Location from 'expo-location';
import  {useEffect}  from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  Image,
} from "react-native";



const Tab = createBottomTabNavigator();

// const socket = io('https://campusconnect.herokuapp.com/');

import socket from "./util/socket";

const captureLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    return;
  }

  let location = await Location.getCurrentPositionAsync({});
  const { latitude, longitude } = location.coords;
  socket.emit('location', { latitude, longitude });
}

function HomeTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        backgroundColor: '#0E1936',
      },
    }}>
      <Tab.Screen name="Events" component={Events}  options={{ 
        headerShown: false, 
        tabBarIcon:({focused})=>(
          <View>
            <Image
              source={require("./assets/iconoutlinespeaker-extra.png")}
              resizeMode="contain"
              style={{ width: 23, height: 23, tintColor: focused ? '#4ec6e0':'#ffffff' }}
            />
          </View> 
        )
        }}/>
      <Tab.Screen name="Socials" component={SocialsTwo} options={{ 
        headerShown: false,
        tabBarIcon:({focused})=>(
          <View>
            <Image
              source={require("./assets/box.png")}
              resizeMode="contain"
              style={{ width: 23, height: 23, tintColor: focused ? '#4ec6e0':'#ffffff' }}
            />
          </View>
        ) }} />
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerShown: false,
        tabBarIcon:({focused})=>(
          <View>
            <Image
              source={require("./assets/home03.png")}
              resizeMode="contain"
              style={{ width: 23, height: 23, tintColor: focused ? '#4ec6e0':'#ffffff' }}
            />
          </View>
        )
        }} />
      <Tab.Screen name="Study Groups" component={StudyGroups} options={{ 
        headerShown: false, 
        tabBarIcon:({focused})=>(
          <View>
            <Image
              source={require("./assets/iconoutlinebookopen-extra.png")}
              style={{ width: 23, height: 23, tintColor: focused ? '#4ec6e0':'#ffffff' }}
            />
          </View>
        )
        }} />
      <Tab.Screen name="My Profile" component={UserProfile} options={{ 
        headerShown: false,
        tabBarIcon:({focused})=>(
          <View>
            <Image
              source={require("./assets/morehorizontal.png")}
              style={{ width: 23, height: 23, tintColor: focused ? '#4ec6e0':'#ffffff' }}
            />

          </View>
        )
        }} />
      <Tab.Screen
          name="SGJoinReq"
          component={StudyGroupJoinRequests}
          options={{ tabBarButton: () => null, tabBarVisible: false,headerShown: false }}
        />
        <Tab.Screen
          name="FriendRequests"
          component={FriendRequest}
          options={{ tabBarButton: () => null, tabBarVisible: false,headerShown: false }}
        />
        <Tab.Screen
          name="OuterChatInterfaceTwo"
          component={OuterChatInterfaceTwo}
          options={{ tabBarButton: () => null, tabBarVisible: false,headerShown: false }}
        />
         <Tab.Screen
          name="ViewFriends"
          component={ViewFriends}
          options={{ tabBarButton: () => null, tabBarVisible: false,headerShown: false }}
        />
        <Tab.Screen
          name="SGAdminPanel"
          component={StudyGroupAdminPanel}
          options={{ tabBarButton: () => null, tabBarVisible: false,headerShown: false }}
        />
        <Tab.Screen
          name="SGGC"
          component={StudyGroupGC}
          options={{ tabBarButton: () => null, tabBarVisible: false,headerShown: false }}
        />
        <Tab.Screen
          name="OuterChatInterface"
          component={OuterChatInterface}
          options={{ tabBarButton: () => null, tabBarVisible: false,headerShown: false }}
        />
        <Tab.Screen
          name="OuterChatInterfaceGroups"
          component={OuterChatInterfaceGroups}
          options={{ tabBarButton: () => null, tabBarVisible: false,headerShown: false }}
        />
        <Tab.Screen
          name="MakeStudyGroup"
          component={MakeStudyGroup}
          options={{ tabBarButton: () => null, tabBarVisible: false,headerShown: false }}
        />
        <Tab.Screen
          name="EnterSchedule"
          component={EnterSchedule}
          options={{ tabBarButton: () => null, tabBarVisible: false,headerShown: false }}
        />
        <Tab.Screen
          name="InteractiveMap"
          component={InteractiveMap}
          options={{ tabBarButton: () => null, tabBarVisible: false,headerShown: false }}
        />
        <Tab.Screen
          name="GroupDesc"
          component={GroupDescription}
          options={{ tabBarButton: () => null, tabBarVisible: false,headerShown: false }}
        />
        <Tab.Screen
          name="EventsExtend"
          component={EventsExtended}
          options={{ tabBarButton: () => null, tabBarVisible: false,headerShown: false }}
        />
        <Tab.Screen
          name="AddEvent"
          component={AddEvent}
          options={{ tabBarButton: () => null, tabBarVisible: false,headerShown: false }}
        />
        <Tab.Screen
          name="ForumsTabPostSettings"
          component={ForumsTabPostSettings}
          options={{ tabBarButton: () => null, tabBarVisible: false,headerShown: false }}
        />
        <Tab.Screen
          name="ForumsTab"
          component={ForumsTab}
          options={{ tabBarButton: () => null, tabBarVisible: false,headerShown: false }}
        />
        <Tab.Screen
          name="InnerChatInterface"
          component={InnerChatInterface}
        //   children={()=><InnerChatInterface socket={socket}/>}
          options={{ tabBarButton: () => null, tabBarVisible: false,headerShown: false }}
        />
    </Tab.Navigator>
  );

}
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    Lato_regular: require("./assets/fonts/Lato_regular.ttf"),
    Roboto_light: require("./assets/fonts/Roboto_light.ttf"),
    Roboto_regular: require("./assets/fonts/Roboto_regular.ttf"),
    Roboto_medium: require("./assets/fonts/Roboto_medium.ttf"),
    Roboto_semibold: require("./assets/fonts/Roboto_semibold.ttf"),
    Roboto_bold: require("./assets/fonts/Roboto_bold.ttf"),
    Roboto_extrabold: require("./assets/fonts/Roboto_extrabold.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
    Poppins_black: require("./assets/fonts/Poppins_black.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  captureLocation();
  useEffect(() => {
    const interval = setInterval(() => {
      captureLocation();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }



  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Login"
            // initialRouteName="OuterChatInterface"
            screenOptions={{ headerShown: false }}
          > 
          <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          <Stack.Screen
              name="HomeScreen"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OuterChatInterfaceGroups"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={FrameScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StudyGroupJoinRequests"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StudyGroupAdminPanel"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StudyGroupGC"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OuterChatInterface"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserProfile"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Socials"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MakeStudyGroup"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EnterSchedule"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InteractiveMap"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupDescription"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StudyGroups"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EventsExtended"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddEvent"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Events"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForumsTabPostSettings"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForumsTab"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InnerChatInterface11"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>        
        ) : (
          <FrameScreen />
          
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
