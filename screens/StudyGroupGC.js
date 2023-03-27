import * as React from "react";
import { Pressable, Image, StyleSheet, View, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const StudyGroupGC = () => {
  return (
    <View style={styles.studyGroupGc}>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group1.png")}
      />
      <Pressable
        style={[
          styles.rectangle,
          styles.rectangleLayout1,
          styles.groupIconLayout,
        ]}
      />
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require("../assets/subtract.png")}
      />
      <View style={[styles.rectangle1, styles.rectangleLayout1]} />
      <View style={[styles.rectangle2, styles.rectangleBg1]} />
      <Text
        style={[styles.thisIsOur, styles.hiHowAreTypo, styles.thisIsOurTypo]}
      >{`This is our study group chat, you can talk about the course here, assignments, exams, quizzes etc. I heard the Mid Term is on Saturday, how’s the prep looking? `}</Text>
      <View
        style={[
          styles.rectangle3,
          styles.rectangle3Position,
          styles.rectangleBg,
        ]}
      />
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image6.png")}
      />
      <Text
        style={[
          styles.imGoodWhats,
          styles.rectangle3Position,
          styles.hiHowAreTypo,
          styles.thisIsOurTypo,
        ]}
      >
        I’m good, what’s the purpose of this group?
      </Text>
      <View
        style={[
          styles.rectangle4,
          styles.hiHowArePosition,
          styles.rectangleBg1,
        ]}
      />
      <Text
        style={[styles.hiHowAre, styles.hiHowArePosition, styles.hiHowAreTypo]}
      >
        Hi! How are you guys?
      </Text>
      <View style={[styles.rectangle5, styles.rectangleLayout]} />
      <Image
        style={[styles.imageIcon1, styles.imageIconLayout2]}
        resizeMode="cover"
        source={require("../assets/image7.png")}
      />
      <View
        style={[styles.rectangle6, styles.rectangleLayout, styles.rectangleBg]}
      />
      <Text style={[styles.hiGuys, styles.rectangleLayout]}>Hi guys!</Text>
      <Text style={[styles.mar1334, styles.mar1334Layout]}>3 MAR 13:34</Text>
      <Image
        style={[styles.imageIcon2, styles.imageIconLayout1]}
        resizeMode="cover"
        source={require("../assets/image8.png")}
      />
      <Image
        style={[styles.imageIcon3, styles.imageIconLayout1]}
        resizeMode="cover"
        source={require("../assets/image9.png")}
      />
      <Image
        style={styles.imageIcon4}
        resizeMode="cover"
        source={require("../assets/image10.png")}
      />
      <Image
        style={[styles.imageIcon5, styles.imageIcon5Layout]}
        resizeMode="cover"
        source={require("../assets/image11.png")}
      />
      <Image
        style={[styles.imageIcon6, styles.imageIconLayout]}
        resizeMode="cover"
        source={require("../assets/image12.png")}
      />
      <Image
        style={[styles.imageIcon7, styles.imageIconLayout]}
        resizeMode="cover"
        source={require("../assets/image13.png")}
      />
      <View style={styles.group}>
        <View style={[styles.rectangle7, styles.imageIcon5Layout]} />
        <Image
          style={[styles.vectorIcon, styles.mar1334Layout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <Text style={[styles.ohWowThats, styles.ohWowThatsTypo]}>
        Oh wow, that’s a great idea!!
      </Text>
      <View style={[styles.rectangle8, styles.rectangleBg]} />
      <Text style={[styles.prepIsntVery, styles.ohWowThatsTypo]}>
        Prep isn’t very good to be honest. We should plan a meetup to study
        soon.
      </Text>
      <Image
        style={[styles.imageIcon8, styles.imageIconLayout2]}
        resizeMode="cover"
        source={require("../assets/image7.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconLayout: {
    height: 40,
    width: 42,
    left: 339,
  },
  rectangleLayout1: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  rectangleBg1: {
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_xl,
  },
  hiHowAreTypo: {
    alignItems: "center",
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
    display: "flex",
    color: Color.white,
    letterSpacing: 1,
  },
  thisIsOurTypo: {
    textAlign: "left",
    alignItems: "center",
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
  },
  rectangle3Position: {
    height: 50,
    top: 284,
    position: "absolute",
  },
  rectangleBg: {
    backgroundColor: Color.darkslategray_100,
    borderRadius: Border.br_xl,
  },
  hiHowArePosition: {
    height: 49,
    top: 224,
    position: "absolute",
  },
  rectangleLayout: {
    height: 41,
    position: "absolute",
  },
  imageIconLayout2: {
    height: 93,
    width: 94,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  mar1334Layout: {
    height: 15,
    position: "absolute",
  },
  imageIconLayout1: {
    height: 106,
    top: 77,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  imageIcon5Layout: {
    height: 38,
    width: 40,
    position: "absolute",
  },
  imageIconLayout: {
    top: 56,
    height: 86,
    width: 87,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  ohWowThatsTypo: {
    left: 67,
    height: 50,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  groupIcon: {
    top: 753,
    position: "absolute",
  },
  rectangle: {
    top: 702,
    backgroundColor: Color.mediumseagreen,
  },
  subtractIcon: {
    width: 20,
    height: 17,
  },
  rectangle1: {
    top: 695,
    left: 35,
    backgroundColor: Color.gray_500,
    width: 288,
    height: 98,
  },
  rectangle2: {
    top: 357,
    left: 108,
    width: 258,
    height: 99,
    position: "absolute",
  },
  thisIsOur: {
    top: 382,
    left: 121,
    width: 227,
    height: 51,
    position: "absolute",
  },
  rectangle3: {
    width: 271,
    left: 45,
  },
  imageIcon: {
    top: 305,
    left: 19,
    width: 74,
    height: 72,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  imGoodWhats: {
    left: 60,
    width: 256,
  },
  rectangle4: {
    left: 179,
    width: 187,
  },
  hiHowAre: {
    left: 116,
    textAlign: "right",
    width: 223,
    alignItems: "center",
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
    top: 224,
  },
  rectangle5: {
    width: 94,
    height: 41,
    top: 173,
    backgroundColor: Color.darkslategray_100,
    left: 45,
    borderRadius: Border.br_xl,
  },
  imageIcon1: {
    top: 192,
    left: 25,
  },
  rectangle6: {
    top: 475,
    width: 229,
    left: 45,
  },
  hiGuys: {
    left: 66,
    width: 255,
    top: 173,
    height: 41,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
  },
  mar1334: {
    top: 146,
    left: 164,
    fontSize: FontSize.size_xs,
    textTransform: "capitalize",
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    alignItems: "flex-end",
    justifyContent: "center",
    width: 83,
    display: "flex",
    color: Color.white,
    letterSpacing: 1,
    height: 15,
  },
  imageIcon2: {
    left: 262,
    width: 107,
  },
  imageIcon3: {
    left: 169,
    width: 108,
  },
  imageIcon4: {
    top: 67,
    left: 71,
    height: 86,
    width: 87,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  imageIcon5: {
    top: 76,
    left: 321,
    borderRadius: Border.br_xl,
    height: 38,
    width: 40,
  },
  imageIcon6: {
    left: 209,
  },
  imageIcon7: {
    left: 117,
  },
  rectangle7: {
    top: -2,
    left: -2,
    borderRadius: 22,
    backgroundColor: "#000",
    borderStyle: "solid",
    borderColor: "#7a8194",
    borderWidth: 2,
  },
  vectorIcon: {
    top: 10,
    left: 1,
    width: 29,
  },
  group: {
    top: 78,
    width: 36,
    height: 34,
    left: 45,
    position: "absolute",
  },
  ohWowThats: {
    top: 471,
    width: 256,
  },
  rectangle8: {
    top: 525,
    left: 49,
    width: 225,
    height: 55,
    position: "absolute",
  },
  prepIsntVery: {
    top: 527,
    width: 207,
  },
  imageIcon8: {
    top: 554,
    left: 20,
  },
  studyGroupGc: {
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

export default StudyGroupGC;
