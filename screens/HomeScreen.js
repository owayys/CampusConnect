import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, Padding, FontSize, Border } from "../GlobalStyles";

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <Image
        style={styles.burgerMenuIcon}
        resizeMode="cover"
        source={require("../assets/burger-menu.png")}
      />
      <Image
        style={styles.homeScreenChild}
        resizeMode="cover"
        source={require("../assets/frame-115.png")}
      />
      <Text style={[styles.search, styles.searchFlexBox]}>Search...</Text>
      <Text
        style={[
          styles.welcomeBackAhmed,
          styles.campusAtALayout,
          styles.forum1Typo1,
        ]}
      >
        Welcome back, Ahmed!
      </Text>
      <Image
        style={styles.iconoutlinebell}
        resizeMode="cover"
        source={require("../assets/iconoutlinebell.png")}
      />
      <Image
        style={[styles.homeScreenItem, styles.homeLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <View style={styles.rectangleParent}>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle4.png")}
        />
        <Text style={[styles.campusAtA, styles.campusAtALayout]}>
          Campus at a glance
        </Text>
      </View>
      <Text style={styles.mySchedule}>My Schedule</Text>
      <View style={[styles.frameParent, styles.searchFlexBox]}>
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
      <View style={styles.frameGroup}>
        <View style={styles.monWrapper}>
          <Text style={[styles.mon, styles.monTypo]}>Mon</Text>
        </View>
        <View style={[styles.wrapperSpaceBlock, styles.ml4]}>
          <Text style={[styles.tue, styles.tueTypo]}>Tue</Text>
        </View>
        <View style={[styles.wrapperSpaceBlock, styles.ml4]}>
          <Text style={[styles.tue, styles.tueTypo]}>Wed</Text>
        </View>
        <View style={[styles.thuWrapper, styles.ml4, styles.wrapperSpaceBlock]}>
          <Text style={styles.tueTypo}>Thu</Text>
        </View>
        <View style={[styles.thuWrapper, styles.ml4, styles.wrapperSpaceBlock]}>
          <Text style={styles.tueTypo}>Fri</Text>
        </View>
        <View style={[styles.thuWrapper, styles.ml4, styles.wrapperSpaceBlock]}>
          <Text style={styles.tueTypo}>Sat</Text>
        </View>
        <View style={[styles.thuWrapper, styles.ml4, styles.wrapperSpaceBlock]}>
          <Text style={styles.tueTypo}>Sun</Text>
        </View>
      </View>
      <Image
        style={[styles.iconoutlinemessageCircle, styles.home03IconLayout]}
        resizeMode="cover"
        source={require("../assets/iconoutlinemessagecircle.png")}
      />
      <Image
        style={[styles.homeScreenInner, styles.homeLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: 2,
  },
  mt4: {
    marginTop: 4,
  },
  mt16: {
    marginTop: 16,
  },
  ml4: {
    marginLeft: 4,
  },
  searchFlexBox: {
    alignItems: "flex-end",
    position: "absolute",
  },
  campusAtALayout: {
    height: 38,
    textAlign: "left",
    position: "absolute",
  },
  forum1Typo1: {
    color: Color.skyblue_100,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  homeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_2xl,
    width: 76,
    backgroundColor: Color.gray_300,
  },
  forum1Typo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  text3Typo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
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
    color: Color.darkNeutral,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  monTypo: {
    letterSpacing: 0.4,
    fontSize: FontSize.size_xs_3,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    textAlign: "left",
  },
  tueTypo: {
    color: Color.darkgray_100,
    letterSpacing: 0.4,
    fontSize: FontSize.size_xs_3,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    textAlign: "left",
  },
  wrapperSpaceBlock: {
    borderRadius: Border.br_base,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
  },
  home03IconLayout: {
    height: 24,
    width: 24,
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
  homeScreenChild: {
    top: 152,
    left: 27,
    width: 355,
    height: 42,
    position: "absolute",
  },
  search: {
    height: "1.91%",
    width: "22.44%",
    top: "20.05%",
    left: "10%",
    letterSpacing: 1,
    color: Color.gray_400,
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    alignItems: "flex-end",
    fontFamily: FontFamily.robotoRegular,
  },
  welcomeBackAhmed: {
    top: 104,
    left: 30,
    fontSize: FontSize.size_6xl,
    width: 382,
  },
  iconoutlinebell: {
    left: 344,
    width: 28,
    height: 28,
    top: 56,
    position: "absolute",
  },
  homeScreenItem: {
    left: 361,
  },
  rectangleIcon: {
    top: -10,
    left: -14,
    borderRadius: Border.br_3xs,
    width: 396,
    height: 230,
    position: "absolute",
  },
  campusAtA: {
    top: 133,
    left: 12,
    fontSize: FontSize.size_mid,
    width: 157,
    color: Color.white,
    fontFamily: FontFamily.robotoRegular,
    height: 38,
  },
  rectangleParent: {
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
    color: Color.skyblue_100,
    textAlign: "left",
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
  },
  mon: {
    opacity: 0.7,
    color: Color.white,
  },
  monWrapper: {
    backgroundColor: Color.skyblue_100,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_sm,
    borderRadius: Border.br_xs,
    justifyContent: "center",
    alignItems: "center",
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
    left: 17,
    flexDirection: "row",
    position: "absolute",
  },
  iconoutlinemessageCircle: {
    top: 58,
    left: 312,
    position: "absolute",
  },
  homeScreenInner: {
    left: 327,
  },
  homeScreen: {
    borderRadius: Border.br_21xl,
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
    width: "100%",
    height: 838,
    overflow: "hidden",
  },
});

export default HomeScreen;
