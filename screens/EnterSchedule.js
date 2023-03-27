import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const EnterSchedule = () => {
  return (
    <View style={styles.enterSchedule}>
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
        style={styles.enterScheduleChild}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={styles.enterScheduleItem}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Text style={styles.enterYourSchedule}>Enter your schedule:</Text>
      <Text style={[styles.class1, styles.classTypo]}>Class 1:</Text>
      <Text style={[styles.name, styles.nameTypo]}>Name:</Text>
      <Text style={[styles.from, styles.nameTypo]}>From:</Text>
      <Text style={[styles.to, styles.nameTypo]}>To:</Text>
      <View style={[styles.rectangle, styles.rectangleLayout1]} />
      <View style={[styles.rectangle1, styles.rectangleLayout]} />
      <View style={[styles.rectangle2, styles.rectangleLayout]} />
      <Text style={[styles.class2, styles.classTypo]}>Class 2:</Text>
      <Text style={[styles.name1, styles.nameTypo]}>Name:</Text>
      <Text style={[styles.from1, styles.nameTypo]}>From:</Text>
      <Text style={[styles.to1, styles.nameTypo]}>To:</Text>
      <View style={[styles.rectangle3, styles.rectangleLayout1]} />
      <View style={[styles.rectangle4, styles.rectangleLayout]} />
      <View style={[styles.rectangle5, styles.rectangleLayout]} />
      <View style={styles.addClassParent}>
        <Text style={[styles.addClass, styles.addClassClr]}>+Add Class</Text>
        <View style={styles.rectangle6} />
      </View>
      <Image
        style={styles.rectangle395Icon}
        resizeMode="cover"
        source={require("../assets/rectangle395.png")}
      />
      <Text style={[styles.finalizeSchedule, styles.addClassClr]}>
        Finalize Schedule
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  classTypo: {
    alignItems: "flex-end",
    textAlign: "left",
    color: Color.gray_400,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    left: "6.59%",
    width: "64.39%",
    height: "2.15%",
    display: "flex",
    letterSpacing: 1,
    position: "absolute",
  },
  nameTypo: {
    left: "4.15%",
    fontFamily: FontFamily.robotoRegular,
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    color: Color.gray_400,
    fontSize: FontSize.size_sm,
    width: "64.39%",
    height: "2.15%",
    letterSpacing: 1,
    position: "absolute",
  },
  rectangleLayout1: {
    height: 27,
    width: 255,
    backgroundColor: Color.gray_500,
    borderRadius: Border.br_3xs,
    left: 37,
    position: "absolute",
  },
  rectangleLayout: {
    left: 36,
    height: 27,
    width: 255,
    backgroundColor: Color.gray_500,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  addClassClr: {
    color: Color.white,
    textAlign: "left",
    letterSpacing: 1,
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
  enterScheduleChild: {
    top: 64,
    left: 355,
    width: 7,
    height: 7,
    position: "absolute",
  },
  enterScheduleItem: {
    top: 101,
    left: 1,
    width: 410,
    height: 1,
    position: "absolute",
  },
  enterYourSchedule: {
    top: 135,
    fontSize: FontSize.size_3xl,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.skyblue_100,
    textAlign: "center",
    textTransform: "capitalize",
    letterSpacing: 1,
    left: 37,
    position: "absolute",
  },
  class1: {
    top: "21.24%",
  },
  name: {
    top: "24.82%",
    fontFamily: FontFamily.robotoRegular,
  },
  from: {
    top: "33.05%",
    fontFamily: FontFamily.robotoRegular,
  },
  to: {
    top: "41.29%",
    fontFamily: FontFamily.robotoRegular,
  },
  rectangle: {
    top: 238,
  },
  rectangle1: {
    top: 307,
  },
  rectangle2: {
    top: 376,
  },
  class2: {
    top: "50.36%",
  },
  name1: {
    top: "53.94%",
    fontFamily: FontFamily.robotoRegular,
  },
  from1: {
    top: "62.17%",
    fontFamily: FontFamily.robotoRegular,
  },
  to1: {
    top: "70.41%",
    fontFamily: FontFamily.robotoRegular,
  },
  rectangle3: {
    top: 482,
  },
  rectangle4: {
    top: 551,
  },
  rectangle5: {
    top: 620,
  },
  addClass: {
    top: 0,
    left: 25,
    fontSize: FontSize.size_smi,
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    alignItems: "center",
    width: 120,
    height: 40,
    display: "flex",
    color: Color.white,
  },
  rectangle6: {
    top: 7,
    left: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.skyblue_300,
    borderStyle: "solid",
    borderColor: "#4ec6e0",
    borderWidth: 1,
    width: 124,
    height: 26,
    position: "absolute",
  },
  addClassParent: {
    top: 675,
    left: 146,
    width: 145,
    height: 40,
    position: "absolute",
  },
  rectangle395Icon: {
    top: 739,
    left: 122,
    width: 163,
    height: 40,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  finalizeSchedule: {
    top: 751,
    left: 140,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
  },
  enterSchedule: {
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

export default EnterSchedule;
