import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MakeStudyGroup = () => {
  return (
    <View style={styles.makeStudyGroup}>
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
        style={styles.makeStudyGroupChild}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={styles.makeStudyGroupItem}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Text style={styles.newStudyGroup}>New Study Group</Text>
      <View style={styles.rectangle} />
      <Text style={styles.addDisplayPicture}>
        + Add Display Picture for Study Group
      </Text>
      <Text style={[styles.timing, styles.daysTypo]}>Timing:</Text>
      <Text style={[styles.subject, styles.subjectTypo]}>Subject:</Text>
      <Text style={[styles.days, styles.daysTypo]}>Days:</Text>
      <Text style={[styles.groupName, styles.daysTypo]}>Group name:</Text>
      <View style={[styles.rectangle1, styles.rectangleLayout]} />
      <View style={styles.rectangle2} />
      <View style={[styles.rectangle3, styles.rectangleLayout]} />
      <View style={[styles.rectangle4, styles.rectangleLayout]} />
      <Text style={[styles.location, styles.subjectTypo]}>Location:</Text>
      <View style={[styles.rectangle5, styles.rectanglePosition]} />
      <View style={[styles.rectangle6, styles.rectanglePosition]} />
      <Text style={[styles.addDescription, styles.subjectTypo]}>
        Add description:
      </Text>
      <Image
        style={styles.rectangle395Icon}
        resizeMode="cover"
        source={require("../assets/rectangle395.png")}
      />
      <Text style={styles.createGroup}>Create Group</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  daysTypo: {
    left: "2.44%",
    width: "64.39%",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    color: Color.gray_400,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    height: "2.15%",
    letterSpacing: 1,
    position: "absolute",
  },
  subjectTypo: {
    left: "2.2%",
    width: "64.39%",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    color: Color.gray_400,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    height: "2.15%",
    letterSpacing: 1,
    position: "absolute",
  },
  rectangleLayout: {
    left: 76,
    height: 27,
    width: 296,
    backgroundColor: Color.gray_500,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  rectanglePosition: {
    left: 81,
    width: 296,
    backgroundColor: Color.gray_500,
    borderRadius: Border.br_3xs,
    position: "absolute",
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
  makeStudyGroupChild: {
    top: 64,
    left: 355,
    width: 7,
    height: 7,
    position: "absolute",
  },
  makeStudyGroupItem: {
    top: 101,
    left: 1,
    width: 410,
    height: 1,
    position: "absolute",
  },
  newStudyGroup: {
    top: 127,
    left: 15,
    fontSize: FontSize.size_3xl,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.skyblue_100,
    textAlign: "center",
    textTransform: "capitalize",
    letterSpacing: 1,
    position: "absolute",
  },
  rectangle: {
    top: 159,
    left: 65,
    height: 150,
    width: 296,
    backgroundColor: Color.gray_500,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  addDisplayPicture: {
    width: "72.93%",
    top: "26.85%",
    left: "18.29%",
    alignItems: "flex-end",
    display: "flex",
    color: Color.gray_400,
    fontSize: FontSize.size_sm,
    height: "2.15%",
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 1,
    position: "absolute",
  },
  timing: {
    top: "51.67%",
  },
  subject: {
    top: "58.95%",
  },
  days: {
    top: "44.99%",
  },
  groupName: {
    top: "38.42%",
  },
  rectangle1: {
    top: 379,
    height: 27,
  },
  rectangle2: {
    top: 322,
    left: 117,
    width: 255,
    height: 27,
    backgroundColor: Color.gray_500,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  rectangle3: {
    top: 433,
    height: 27,
  },
  rectangle4: {
    top: 494,
    height: 27,
  },
  location: {
    top: "81.38%",
  },
  rectangle5: {
    top: 678,
    height: 27,
  },
  rectangle6: {
    top: 579,
    height: 87,
  },
  addDescription: {
    top: "65.04%",
  },
  rectangle395Icon: {
    top: 746,
    left: 131,
    width: 163,
    height: 40,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  createGroup: {
    top: 757,
    left: 163,
    fontSize: FontSize.size_mini,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    letterSpacing: 1,
    position: "absolute",
  },
  makeStudyGroup: {
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

export default MakeStudyGroup;
