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
import InnerChatInterface11 from "./screens/InnerChatInterface11";
import io from 'socket.io-client';
import * as Location from 'expo-location';
import  {useEffect}  from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();

const socket = io('http://10.130.140.127:3000');

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
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Events" component={Events}  options={{ headerShown: false }}/>
      <Tab.Screen name="Socials" component={Socials} options={{ headerShown: false }} />
      <Tab.Screen name="Study Groups" component={StudyGroups} options={{ headerShown: false }} />
      <Tab.Screen name="My Profile" component={UserProfile} options={{ headerShown: false }} />
      <Tab.Screen
          name="SGJoinReq"
          component={StudyGroupJoinRequests}
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
    }, 20000);
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
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Frame1"
              component={FrameScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StudyGroupJoinRequests"
              component={StudyGroupJoinRequests}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StudyGroupAdminPanel"
              component={StudyGroupAdminPanel}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StudyGroupGC"
              component={StudyGroupGC}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OuterChatInterface"
              component={OuterChatInterface}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserProfile"
              component={UserProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Socials"
              component={Socials}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MakeStudyGroup"
              component={MakeStudyGroup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EnterSchedule"
              component={EnterSchedule}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InteractiveMap"
              component={InteractiveMap}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupDescription"
              component={GroupDescription}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StudyGroups"
              component={StudyGroups}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EventsExtended"
              component={EventsExtended}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddEvent"
              component={AddEvent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Events"
              component={Events}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForumsTabPostSettings"
              component={ForumsTabPostSettings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForumsTab"
              component={ForumsTab}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InnerChatInterface11"
              component={InnerChatInterface11}
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
