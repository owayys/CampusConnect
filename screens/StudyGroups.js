import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const StudyGroups = () => {
  return (
    <View style={styles.studyGroups}>
      <View style={[styles.rectangle, styles.rectangleShadowBox]} />
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image21.png")}
      />
      <Image
        style={styles.iconoutlinemessageCircle}
        resizeMode="cover"
        source={require("../assets/iconoutlinemessagecircle.png")}
      />
      <Image
        style={styles.studyGroupsChild}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={styles.studyGroupsItem}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Text style={styles.studyGroups1}>Study Groups</Text>
      <Text
        style={[styles.advancedProgramming, styles.advancedProgrammingTypo]}
      >{`Advanced
Programming`}</Text>
      <Text
        style={[styles.daysMondays, styles.daysTypo]}
      >{`Days: Mondays & Wednesdays
Timing:  5:00 pm - 6:00 pm
Current Members: 2
Max Capacity: 10`}</Text>
      <Image
        style={[styles.rectangle395Icon, styles.rectangle395IconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle3951.png")}
      />
      <Text
        style={[
          styles.joinGroup,
          styles.joinGroupFlexBox,
          styles.joinGroupTypo,
        ]}
      >
        Join Group
      </Text>
      <View style={styles.makeNewGroupParent}>
        <Text style={[styles.makeNewGroup, styles.joinGroupFlexBox]}>
          Make new group
        </Text>
        <View style={styles.rectangle1} />
      </View>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle1.png")}
      />
      <View style={[styles.rectangle2, styles.rectangleShadowBox]} />
      <Text
        style={[
          styles.softwareEngineering,
          styles.rectangle395Icon1Position,
          styles.advancedProgrammingTypo,
        ]}
      >{`Software
Engineering`}</Text>
      <Text
        style={[styles.daysMondays1, styles.daysTypo]}
      >{`Days: Mondays & Wednesdays
Timing:  5:00 pm - 6:00 pm
Current Members: 3
Max Capacity: 10`}</Text>
      <Image
        style={[
          styles.rectangle395Icon1,
          styles.rectangle395Icon1Position,
          styles.rectangle395IconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle3951.png")}
      />
      <Text
        style={[
          styles.joinGroup1,
          styles.joinGroupFlexBox,
          styles.joinGroupTypo,
        ]}
      >
        Join Group
      </Text>
      <Text
        style={[
          styles.joinGroup1,
          styles.joinGroupFlexBox,
          styles.joinGroupTypo,
        ]}
      >
        Join Group
      </Text>
      <Image
        style={[styles.rectangleIcon1, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleShadowBox: {
    height: 207,
    width: 379,
    elevation: 34,
    shadowRadius: 34,
    shadowColor: "rgba(0, 0, 0, 0.45)",
    backgroundColor: Color.gray_600,
    borderRadius: Border.br_10xl,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 40,
      height: 40,
    },
  },
  advancedProgrammingTypo: {
    color: Color.white,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    textTransform: "capitalize",
    letterSpacing: 1,
  },
  daysTypo: {
    fontSize: FontSize.size_xs,
    color: Color.white,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    textTransform: "capitalize",
    letterSpacing: 1,
    position: "absolute",
  },
  rectangle395IconLayout: {
    width: 98,
    borderRadius: Border.br_3xs,
    height: 40,
  },
  joinGroupFlexBox: {
    textAlign: "left",
    color: Color.white,
    letterSpacing: 1,
    position: "absolute",
  },
  joinGroupTypo: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    textTransform: "capitalize",
  },
  rectangleIconLayout: {
    height: 127,
    width: 135,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  rectangle395Icon1Position: {
    left: 236,
    position: "absolute",
  },
  rectangle: {
    top: 211,
    left: 15,
  },
  imageIcon: {
    top: 58,
    left: 27,
    borderRadius: Border.br_31xl,
    width: 38,
    height: 38,
    position: "absolute",
  },
  iconoutlinemessageCircle: {
    top: 66,
    left: 340,
    width: 24,
    height: 24,
    position: "absolute",
  },
  studyGroupsChild: {
    top: 64,
    left: 355,
    width: 7,
    height: 7,
    position: "absolute",
  },
  studyGroupsItem: {
    top: 101,
    left: 1,
    width: 410,
    height: 1,
    position: "absolute",
  },
  studyGroups1: {
    top: 127,
    left: 21,
    fontSize: FontSize.size_3xl,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.skyblue_100,
    textAlign: "center",
    textTransform: "capitalize",
    letterSpacing: 1,
    position: "absolute",
  },
  advancedProgramming: {
    top: 236,
    left: 224,
    position: "absolute",
  },
  daysMondays: {
    top: 293,
    left: 182,
  },
  rectangle395Icon: {
    top: 371,
    left: 231,
    height: 40,
    position: "absolute",
  },
  joinGroup: {
    top: 382,
    left: 238,
  },
  makeNewGroup: {
    top: 0,
    left: 19,
    fontSize: FontSize.size_smi,
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    display: "flex",
    alignItems: "center",
    width: 188,
    height: 40,
  },
  rectangle1: {
    top: 3,
    left: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.skyblue_300,
    borderStyle: "solid",
    borderColor: "#4ec6e0",
    borderWidth: 1,
    width: 148,
    height: 34,
    position: "absolute",
  },
  makeNewGroupParent: {
    top: 128,
    left: 242,
    width: 207,
    height: 40,
    position: "absolute",
  },
  rectangleIcon: {
    top: 250,
    left: 30,
  },
  rectangle2: {
    top: 461,
    left: 20,
  },
  softwareEngineering: {
    top: 486,
  },
  daysMondays1: {
    top: 543,
    left: 187,
  },
  rectangle395Icon1: {
    top: 621,
    height: 40,
  },
  joinGroup1: {
    top: 632,
    left: 243,
  },
  rectangleIcon1: {
    top: 500,
    left: 29,
  },
  studyGroups: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.gray_200,
    shadowColor: "rgba(24, 48, 63, 0.5)",
    shadowRadius: 100,
    elevation: 100,
    flex: 1,
    width: "100%",
    height: 838,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 40,
      height: 40,
    },
  },
});

export default StudyGroups;
