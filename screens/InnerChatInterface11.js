import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const InnerChatInterface11 = () => {
  return (
    <View style={styles.innerChatInterface11}>
      <View style={styles.rectangle} />
      <Text style={styles.write}>Write</Text>
      <View style={[styles.rectangle1, styles.groupIconLayout]} />
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require("../assets/subtract1.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group8.png")}
      />
      <View style={styles.rectangle2} />
      <Image
        style={styles.groupIcon1}
        resizeMode="cover"
        source={require("../assets/group9.png")}
      />
      <View
        style={[
          styles.rectangle3,
          styles.rectangle3Position,
          styles.rectangleBg,
          styles.rectanglePosition,
        ]}
      />
      <Text
        style={[
          styles.email123examplecom,
          styles.text1Typo,
          styles.feb1200Clr,
          styles.nextMonthTypo,
          styles.rectangle3Position,
        ]}
      >
        email123@example.com
      </Text>
      <Text
        style={[
          styles.text,
          styles.textFlexBox,
          styles.textTypo,
          styles.textTypo1,
          styles.textTypo2,
        ]}
      >
        08:43
      </Text>
      <View style={[styles.rectangle4, styles.text1Position]} />
      <Text
        style={[
          styles.text1,
          styles.text1Position,
          styles.textFlexBox,
          styles.text1Typo,
        ]}
      >
        ?
      </Text>
      <View
        style={[
          styles.rectangle5,
          styles.iAmAlmostLayout,
          styles.iAmAlmostPosition,
          styles.rectangleBg1,
        ]}
      />
      <Text
        style={[
          styles.iAmAlmost,
          styles.iAmAlmostLayout,
          styles.iAmAlmostPosition,
          styles.textFlexBox,
          styles.text1Typo,
        ]}
      >
        I am almost finished. Please give me your email, I will ZIP them and
        send you as son as im finish.
      </Text>
      <Text
        style={[
          styles.text2,
          styles.textFlexBox,
          styles.textTypo,
          styles.textTypo1,
          styles.textTypo2,
        ]}
      >
        08:12
      </Text>
      <View
        style={[
          styles.rectangle6,
          styles.nextMonthPosition,
          styles.rectangleBg,
          styles.rectanglePosition,
        ]}
      />
      <Text
        style={[
          styles.nextMonth,
          styles.nextMonthPosition,
          styles.text1Typo,
          styles.feb1200Clr,
          styles.nextMonthTypo,
        ]}
      >
        Next month?
      </Text>
      <View
        style={[styles.rectangle7, styles.ohWowPosition, styles.rectangleBg1]}
      />
      <Text
        style={[
          styles.ohWow,
          styles.ohWowPosition,
          styles.textFlexBox,
          styles.text1Typo,
        ]}
      >
        Oh Wow
      </Text>
      <View style={[styles.rectangle8, styles.rectangleBg]} />
      <Text
        style={[
          styles.iGettingFull,
          styles.iAmAlmostLayout,
          styles.text1Typo,
          styles.feb1200Clr,
          styles.nextMonthTypo,
        ]}
      >
        I getting full marks in AP
      </Text>
      <Text
        style={[
          styles.feb1200,
          styles.textTypo,
          styles.textTypo1,
          styles.feb1200Clr,
        ]}
      >
        1 FEB 12:00
      </Text>
      <Text style={[styles.ahmedLuqman, styles.textFlexBox, styles.textTypo]}>
        Ahmed Luqman
      </Text>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image25.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconLayout: {
    width: 43,
    height: 43,
    top: 753,
    position: "absolute",
  },
  rectangle3Position: {
    height: 40,
    top: 505,
    position: "absolute",
  },
  rectangleBg: {
    backgroundColor: Color.darkslategray_100,
    borderRadius: Border.br_xl,
  },
  rectanglePosition: {
    left: 35,
    backgroundColor: Color.darkslategray_100,
  },
  text1Typo: {
    alignItems: "center",
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
    display: "flex",
  },
  feb1200Clr: {
    color: Color.white,
    letterSpacing: 1,
  },
  nextMonthTypo: {
    left: 49,
    color: Color.white,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
    textAlign: "left",
  },
  textFlexBox: {
    textAlign: "right",
    color: Color.white,
    letterSpacing: 1,
  },
  textTypo: {
    textTransform: "capitalize",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_xs,
    textTransform: "capitalize",
  },
  textTypo2: {
    left: 170,
    textAlign: "right",
    fontSize: FontSize.size_xs,
  },
  text1Position: {
    top: 435,
    height: 34,
    position: "absolute",
  },
  iAmAlmostLayout: {
    height: 60,
    position: "absolute",
  },
  iAmAlmostPosition: {
    top: 365,
    height: 60,
  },
  rectangleBg1: {
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_xl,
  },
  nextMonthPosition: {
    top: 285,
    height: 40,
    position: "absolute",
  },
  ohWowPosition: {
    height: 50,
    top: 225,
    position: "absolute",
  },
  rectangle: {
    left: 28,
    backgroundColor: Color.gray_500,
    width: 296,
    height: 43,
    top: 753,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  write: {
    height: "2.15%",
    width: "10.73%",
    top: "91.29%",
    left: "11.46%",
    fontSize: FontSize.size_sm,
    color: Color.gray_400,
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 1,
    position: "absolute",
  },
  rectangle1: {
    left: 340,
    backgroundColor: Color.mediumseagreen,
    borderRadius: Border.br_3xs,
    width: 43,
  },
  subtractIcon: {
    width: 20,
    height: 18,
  },
  groupIcon: {
    left: 281,
  },
  rectangle2: {
    top: 555,
    height: 34,
    width: 40,
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_xl,
    left: 300,
    position: "absolute",
  },
  groupIcon1: {
    height: "1.94%",
    width: "3.76%",
    top: "67.3%",
    right: "20.14%",
    bottom: "30.76%",
    left: "76.1%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangle3: {
    width: 187,
  },
  email123examplecom: {
    textDecoration: "underline",
    width: 196,
  },
  text: {
    top: 479,
  },
  rectangle4: {
    width: 40,
    left: 300,
    top: 435,
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_xl,
  },
  text1: {
    left: 313,
    width: 10,
  },
  rectangle5: {
    left: 60,
    width: 280,
  },
  iAmAlmost: {
    left: 71,
    width: 249,
  },
  text2: {
    top: 339,
  },
  rectangle6: {
    width: 115,
  },
  nextMonth: {
    width: 92,
  },
  rectangle7: {
    left: 230,
    width: 110,
  },
  ohWow: {
    left: 107,
    width: 213,
  },
  rectangle8: {
    top: 160,
    left: 32,
    width: 231,
    height: 49,
    position: "absolute",
  },
  iGettingFull: {
    top: 155,
    width: 243,
  },
  feb1200: {
    top: 129,
    left: 150,
    textAlign: "center",
  },
  ahmedLuqman: {
    top: 73,
    left: 222,
    fontSize: FontSize.size_mini,
  },
  imageIcon: {
    top: 34,
    left: 19,
    borderRadius: Border.br_11xl,
    width: 104,
    height: 104,
    position: "absolute",
  },
  innerChatInterface11: {
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

export default InnerChatInterface11;
