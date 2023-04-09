import * as React from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";
const HomeScreen = ({ route }) => {
  console.log(route);
  const [username, setUsername] = useState("");
  const navigation = useNavigation();
  if (route.params!==undefined){
    const { name } = route.params;
    AsyncStorage.setItem('username', name);
  }
  AsyncStorage.getItem('username').then((value) => {
    setUsername(value);
    console.log(value);
  });
  const [currDay, setCurrDay] = React.useState("Mon");
  return (
    <ScrollView>
      <View style={styles.homeScreen}>
        {/* <Image
          style={styles.burgerMenuIcon}
          resizeMode="cover"
          source={require("../assets/burger-menu.png")}
        /> */}
        <View style={[styles.rectangleParent, styles.rectangleLayout1]}>
          <TextInput
            style={[
              styles.rectangle,
              styles.rectangleLayout,
              styles.rectangleLayout1,
            ]}
            placeholder="Search..."
            keyboardType="default"
            autoCapitalize="none"
          />
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
        </View>
        <Text style={[styles.welcomeBack, styles.campusAtALayout]}>
          Welcome back, {username}!
        </Text>
        <Image
          style={styles.iconoutlinebell}
          resizeMode="cover"
          source={require("../assets/iconoutlinebell.png")}
        />
        <Image
          style={[styles.homeScreenChild, styles.homeLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("EnterSchedule", { name: name })}
          style={{
            position: "absolute",
            top: responsiveScreenHeight(47),
            //left: 330,
            left: responsiveScreenWidth(84.6),
            //width: 33,
            width: responsiveScreenWidth(8.4),
            //height: 33,
            height: responsiveScreenWidth(8.4),
          }}
        >
          <Image
            style={{
              tintColor: "white",
              //width: 33,
              width: responsiveScreenWidth(8.4),
              //height: 33,
              height: responsiveScreenWidth(8.4),
              // backgroundColor:"#ffffff"
            }}
            resizeMode="cover"
            source={require("../assets/plus-box-outline.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.rectangleGroup}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("InteractiveMap")}
        >
          <Image
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              height: "100%",
              borderRadius: Border.br_3xs,
            }}
            resizeMode="cover"
            source={require("../assets/rectangle5.png")}
          />
          <Text style={[styles.campusAtA, styles.campusAtALayout]}>
            Campus at a glance
          </Text>
        </TouchableOpacity>
        <Text style={styles.mySchedule}>My Schedule</Text>
        {/* <View style={styles.frameParent}>
          <View style={[styles.frameWrapper, styles.frameLayout]}>
            <View style={styles.advancedProgrammingParent}>
              <Text
                style={[styles.advancedProgramming, styles.networkSecurityTypo]}
              >
                Advanced Programming
              </Text>
              <Text style={[styles.am145pm, styles.mt4, styles.monTypo]}>
                12:30AM - 1:45PM
              </Text>
            </View>
          </View>
          <View
            style={[styles.frameContainer, styles.mt16, styles.frameLayout]}
          >
            <View style={styles.advancedProgrammingParent}>
              <Text
                style={[styles.softwareEngineering, styles.networkSecurityTypo]}
              >
                Software Engineering
              </Text>
              <Text style={[styles.am145pm, styles.mt4, styles.monTypo]}>
                2:00PM - 3:15PM
              </Text>
            </View>
          </View>
          <View style={[styles.frameWrapper, styles.mt16, styles.frameLayout]}>
            <View style={styles.advancedProgrammingParent}>
              <Text
                style={[styles.networkSecurity, styles.networkSecurityTypo]}
              >
                Network Security
              </Text>
              <Text style={[styles.am145pm, styles.mt4, styles.monTypo]}>
                5:00 - 6:15
              </Text>
            </View>
          </View>
        </View> */}
        <View style={styles.frameGroup}>
          <TouchableOpacity
            style={[styles.button, currDay === "Mon" && styles.activeButton]}
            onPress={() => setCurrDay("Mon")}
          >
            <Text style={styles.buttonText}>Mon</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, currDay === "Tue" && styles.activeButton]}
            onPress={() => setCurrDay("Tue")}
          >
            <Text style={styles.buttonText}>Tue</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, currDay === "Wed" && styles.activeButton]}
            onPress={() => setCurrDay("Wed")}
          >
            <Text style={styles.buttonText}>Wed</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, currDay === "Thu" && styles.activeButton]}
            onPress={() => setCurrDay("Thu")}
          >
            <Text style={styles.buttonText}>Thu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, currDay === "Fri" && styles.activeButton]}
            onPress={() => setCurrDay("Fri")}
          >
            <Text style={styles.buttonText}>Fri</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, currDay === "Sat" && styles.activeButton]}
            onPress={() => setCurrDay("Sat")}
          >
            <Text style={styles.buttonText}>Sat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, currDay === "Sun" && styles.activeButton]}
            onPress={() => setCurrDay("Sun")}
          >
            <Text style={styles.buttonText}>Sun</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[styles.iconOutlineMessageCircle, styles.home03IconLayout]}
        >
          <TouchableOpacity
            style={styles.basePosition}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("OuterChatInterface")}
          >
            <Image
              style={styles.chatIcon}
              resizeMode="contain"
              source={require("../assets/chat-icon-home.png")}
            />
          </TouchableOpacity>
        </View>
        <Image
          style={[styles.homeScreenItem, styles.homeLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-5.png")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: 4,
  },
  mt16: {
    marginTop: 16,
  },
  ml4: {
    marginLeft: 4,
  },
  mt2: {
    marginTop: 2,
  },
  rectangleLayout1: {
    //height: 42,
    height: responsiveScreenHeight(5),
    //width: 355,
    width: responsiveScreenWidth(90),
    //backgroundColor:"#ffffff"
  },
  rectangleLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  campusAtALayout: {
    //height: 38,
    height: responsiveScreenHeight(4),
    textAlign: "left",
    position: "absolute",
  },
  homeLayout: {
    // height: 7,
    height: responsiveScreenWidth(1.8),
    // width: 7,
    width: responsiveScreenWidth(1.8),
    //top: 56,
    top: responsiveScreenHeight(6.8),
    position: "absolute",
  },
  frameLayout: {
    width: 303,
    borderRadius: Border.br_xs,
    overflow: "hidden",
  },
  networkSecurityTypo: {
    fontFamily: FontFamily.poppinsSemibold,
    letterSpacing: 0.3,
    fontSize: FontSize.size_sm,
    color: Color.darkNeutral,
    fontWeight: "600",
    textAlign: "left",
  },
  monTypo: {
    letterSpacing: 0.4,
    fontSize: FontSize.size_xs_3,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    textAlign: "left",
  },
  stPosition: {
    // left: 0,
    // left: responsiveScreenWidth(4),
    // position: "absolute",
  },
  tueTypo: {
    color: Color.darkgray_100,
    letterSpacing: 0.4,
    fontSize: FontSize.size_xs_3,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    textAlign: "left",
  },
  wrapperFlexBox: {
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_sm,
  },
  iconOutlineMessageCircle: {
    position: "absolute",
    // top: 56,
    top: responsiveScreenHeight(6.8),
    left: responsiveScreenWidth(80)
  },
  home03IconLayout: {
    // height: 24,
    // width: 24,
    tintColor: "white",
    //width: 33,
    width: responsiveScreenWidth(6),
    //height: 33,
    height: responsiveScreenWidth(6.5),
  },
  chatIcon: {
    // width: 20,
    // height: 20,
    // tintColor:"white",
    tintColor: "white",
    //width: 33,
    width: responsiveScreenWidth(6),
    //height: 33,
    height: responsiveScreenWidth(6.5),
  },
  basePosition: {
    // left: "0%",
    // bottom: "0%",
    // right: "0%",
    // top: "0%",
    // height: "100%",
    // position: "absolute",
    // width: "100%",

    position: "absolute",
    left: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    
  },
  homeSpaceBlock: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_2xl,
    width: 76,
    backgroundColor: Color.gray_300,
    justifyContent: "center",
    alignItems: "center",
  },
  text4Typo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  burgerMenuIcon: {
    marginTop: -358,
    marginLeft: -175,
    top: "50%",
    left: "50%",
    width: 22,
    height: 16,
    position: "absolute",
  },
  rectangle: {
    // left: 0,
    backgroundColor: Color.darkslategray_200,
    // top: 0,
  },
  groupIcon: {
    //left: 305,
    left: responsiveScreenWidth(79),
    //width: 40,
    width: responsiveScreenWidth(10),
    // height: 40,
    height: responsiveScreenWidth(10),
    // top: 0,
    position: "absolute",
  },
  rectangleParent: {
    //top: 152,
    top: responsiveScreenHeight(18),
    //left: 27,
    margin: "auto",
    marginLeft: "5%",
    marginRight: "5%",
    position: "auto",
    // backgroundColor:"#ffffff"
  },
  welcomeBack: {
    //top: 104,
    top: responsiveScreenHeight(12),
    //left: 30,
    left: responsiveScreenWidth(7.8),
    //fontSize: FontSize.size_6xl,
    fontSize: responsiveScreenFontSize(3.35),
    //width: 382,
    width: responsiveScreenWidth(80),
    color: Color.skyblue_100,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  iconoutlinebell: {
    //left: 344,
    left: responsiveScreenWidth(89),
    //width: 28,
    width: responsiveScreenWidth(7),
    // /height: 28,
    height: responsiveScreenWidth(7),
    top: responsiveScreenHeight(6.8),
    position: "absolute",
  },
  homeScreenChild: {
    //left: 361,
    left: responsiveScreenWidth(93),
  },
  rectangleIcon: {
    //top: -10,
    top: responsiveScreenHeight(-1.2),
    //left: 0,
    // width: 396,
    // height: 230,
    width: responsiveScreenWidth(93),
    height: responsiveScreenHeight(28.2),
  },
  campusAtA: {
    // top: 133,
    top: responsiveScreenHeight(17),
    //left: 12,
    left: responsiveScreenWidth(3.6),
    //fontSize: FontSize.size_mid,
    fontSize: responsiveScreenFontSize(2),
    fontFamily: FontFamily.robotoRegular,
    // fontWeight: "500",
    //width: 157,
    width: responsiveScreenWidth(35),
    color: Color.white,
  },
  rectangleGroup: {
    //top: 214,
    top: responsiveScreenHeight(25.4),
    //left: 28,
    // width: 353,
    width: responsiveScreenWidth(88),
    //height: 170,
    height: responsiveScreenHeight(20),
    position: "absolute",
    margin: "auto",
    marginLeft: "6%",
    marginRight: "6%",
  },
  mySchedule: {
    top: responsiveScreenHeight(47.5),
    //fontSize: FontSize.size_xl,
    fontSize: responsiveScreenFontSize(2.5),
    fontFamily: FontFamily.robotoSemibold,
    //width: 136,
    width: responsiveScreenWidth(36),
    //height: 35,
    height: responsiveScreenHeight(3),
    fontWeight: "600",
    //left: 17,
    left: responsiveScreenWidth(5),
    textAlign: "left",
    color: Color.skyblue_100,
    position: "absolute",
  },
  advancedProgramming: {
    width: 196,
    color: Color.darkNeutral,
  },
  am145pm: {
    opacity: 0.6,
    color: Color.darkNeutral,
  },
  advancedProgrammingParent: {
    top: 16,
    left: 16,
    position: "absolute",
  },
  frameWrapper: {
    backgroundColor: Color.peachpuff,
    height: 70,
  },
  softwareEngineering: {
    width: 237,
    color: Color.darkNeutral,
  },
  frameContainer: {
    backgroundColor: Color.accentRoyalBlue200,
    height: 87,
  },
  networkSecurity: {
    width: 174,
    color: Color.darkNeutral,
  },
  frameParent: {
    top: 478,
    left: 66,
    width: 289,
    height: 239,
    alignItems: "flex-end",
    position: "absolute",
  },
  frameGroup: {
    top: responsiveScreenHeight(52.7),
    //width: 359,
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(6),
    flexDirection: "row",
    //backgroundColor:"#ffffff",
    margin: "auto",
    left: responsiveScreenWidth(5),
    position: "absolute",
  },
  homeScreenItem: {
    left: responsiveScreenWidth(83.5),
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0E1936",
    borderRadius: 12,
  },
  activeButton: {
    backgroundColor: "#4ec6e0",
  },
  buttonText: {
    //fontSize: 14,
    fontSize: responsiveScreenFontSize(1.7),
    fontWeight: "bold",
    color: "#ffffff",
  },
  homeScreen: {
    backgroundColor: Color.gray_200,
    shadowColor: "rgba(24, 48, 63, 0.5)",
    shadowOffset: {
      width: 40,
      height: 40,
    },
    shadowRadius: 100,
    elevation: 100,
    shadowOpacity: 1,
    flex: 1,
    height: 838,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomeScreen;
