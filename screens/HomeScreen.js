import * as React from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeScreen}>
      <Image
        style={styles.burgerMenuIcon}
        resizeMode="cover"
        source={require("../assets/burger-menu.png")}
      />
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
      <Text style={[styles.welcomeBackAhmed, styles.campusAtALayout]}>
        Welcome back, Ahmed!
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
        style={styles.rectangleGroup}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("InteractiveMap")}
      >
        <Image
          style={[styles.rectangleIcon, styles.rectangleLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle4.png")}
        />
        <Text style={[styles.campusAtA, styles.campusAtALayout]}>
          Campus at a glance
        </Text>
      </TouchableOpacity>
      <Text style={styles.mySchedule}>My Schedule</Text>
      <View style={styles.frameParent}>
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
        <View style={[styles.frameContainer, styles.mt16, styles.frameLayout]}>
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
            <Text style={[styles.networkSecurity, styles.networkSecurityTypo]}>
              Network Security
            </Text>
            <Text style={[styles.am145pm, styles.mt4, styles.monTypo]}>
              5:00 - 6:15
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.frameGroup, styles.stPosition]}>
        <TouchableOpacity
          style={styles.monWrapper}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <Text style={[styles.mon, styles.monTypo]}>Mon</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.wrapperFlexBox, styles.ml4]}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <Text style={[styles.tue, styles.tueTypo]}>Tue</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.wrapperFlexBox, styles.ml4]}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <Text style={[styles.tue, styles.tueTypo]}>Wed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.thuWrapper, styles.ml4, styles.wrapperFlexBox]}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <Text style={styles.tueTypo}>Thu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.thuWrapper, styles.ml4, styles.wrapperFlexBox]}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <Text style={styles.tueTypo}>Fri</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.thuWrapper, styles.ml4, styles.wrapperFlexBox]}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <Text style={styles.tueTypo}>Sat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.thuWrapper, styles.ml4, styles.wrapperFlexBox]}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <Text style={styles.tueTypo}>Sun</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.iconoutlinemessageCircle, styles.home03IconLayout]}>
        <Image
          style={styles.maskIcon}
          resizeMode="cover"
          source={require("../assets/mask.png")}
        />
        <TouchableOpacity
          style={styles.basePosition}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <TouchableOpacity
            style={[styles.base, styles.basePosition]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("OuterChatInterface")}
          />
        </TouchableOpacity>
      </View>
      <Image
        style={[styles.homeScreenItem, styles.homeLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <View style={[styles.st, styles.stPosition]}>
        <View style={styles.iconsHead}>
          <TouchableOpacity
            style={[styles.home, styles.homeSpaceBlock]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("ForumsTab")}
          >
            <Image
              style={styles.home03IconLayout}
              resizeMode="cover"
              source={require("../assets/home03.png")}
            />
            <View style={[styles.forum, styles.mt2]}>
              <Text style={[styles.forum1Typo, styles.text4Typo]}>Forum</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homeSpaceBlock}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("Events")}
          >
            <Image
              style={styles.home03IconLayout}
              resizeMode="cover"
              source={require("../assets/iconoutlinespeaker.png")}
            />
            <View style={[styles.forum, styles.mt2]}>
              <Text style={styles.text4Typo}>Events</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homeSpaceBlock}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("Socials")}
          >
            <Image
              style={styles.home03IconLayout}
              resizeMode="cover"
              source={require("../assets/box.png")}
            />
            <View style={[styles.forum, styles.mt2]}>
              <Text style={styles.text4Typo}>Social</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.homeSpaceBlock}>
            <TouchableOpacity
              style={styles.home03IconLayout}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("StudyGroups")}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/iconoutlinebookopen.png")}
              />
            </TouchableOpacity>
            <View style={[styles.forum, styles.mt2]}>
              <Text style={styles.forum1Typo}>
                <Text style={styles.study}>Study</Text>
                <Text style={styles.text4Typo}>{` `}</Text>
                <Text style={styles.study}>Group</Text>
              </Text>
            </View>
            <Image
              style={[styles.home03IconLayout, styles.mt2]}
              resizeMode="cover"
              source={require("../assets/piggybank02.png")}
            />
          </View>
          <TouchableOpacity
            style={[styles.more, styles.homeSpaceBlock]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("UserProfile")}
          >
            <Image
              style={styles.home03IconLayout}
              resizeMode="cover"
              source={require("../assets/morehorizontal.png")}
            />
            <View style={[styles.forum, styles.mt2]}>
              <Text style={styles.text4Typo}>Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    height: 42,
    width: 355,
  },
  rectangleLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  campusAtALayout: {
    height: 38,
    textAlign: "left",
    position: "absolute",
  },
  homeLayout: {
    height: 7,
    width: 7,
    top: 56,
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
    left: 17,
    position: "absolute",
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
  home03IconLayout: {
    height: 24,
    width: 24,
  },
  basePosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
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
    left: 0,
    backgroundColor: Color.darkslategray_200,
    top: 0,
  },
  groupIcon: {
    left: 305,
    width: 40,
    height: 40,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 152,
    left: 27,
    position: "absolute",
  },
  welcomeBackAhmed: {
    top: 104,
    left: 30,
    fontSize: FontSize.size_6xl,
    width: 382,
    color: Color.skyblue_100,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  iconoutlinebell: {
    left: 344,
    width: 28,
    height: 28,
    top: 56,
    position: "absolute",
  },
  homeScreenChild: {
    left: 361,
  },
  rectangleIcon: {
    top: -10,
    left: -14,
    width: 396,
    height: 230,
  },
  campusAtA: {
    top: 133,
    left: 12,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.robotoRegular,
    width: 157,
    color: Color.white,
  },
  rectangleGroup: {
    top: 214,
    left: 28,
    width: 353,
    height: 171,
    position: "absolute",
  },
  mySchedule: {
    top: 395,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoSemibold,
    width: 136,
    height: 35,
    fontWeight: "600",
    left: 17,
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
  mon: {
    opacity: 0.7,
    color: Color.white,
  },
  monWrapper: {
    backgroundColor: Color.skyblue_100,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_sm,
    borderRadius: Border.br_xs,
  },
  tue: {
    opacity: 0.7,
  },
  thuWrapper: {
    opacity: 0.7,
  },
  frameGroup: {
    top: 425,
    width: 359,
    height: 45,
    flexDirection: "row",
  },
  maskIcon: {
    width: 20,
    height: 20,
  },
  base: {
    backgroundColor: Color.white,
  },
  iconoutlinemessageCircle: {
    top: 58,
    left: 312,
    position: "absolute",
  },
  homeScreenItem: {
    left: 327,
  },
  forum1Typo: {
    fontSize: FontSize.size_xs,
    color: Color.white,
    textAlign: "left",
  },
  forum: {
    flexDirection: "row",
  },
  home: {
    borderTopLeftRadius: Border.br_11xs,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  study: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  more: {
    borderTopRightRadius: Border.br_11xs,
  },
  iconsHead: {
    borderTopRightRadius: Border.br_11xs,
    borderTopLeftRadius: Border.br_11xs,
    flexDirection: "row",
  },
  st: {
    top: 767,
    width: 380,
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
