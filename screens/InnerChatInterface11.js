import * as React from "react";
import {
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  View,
  Text,
} from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const InnerChatInterface11 = () => {
  return (
    <View style={styles.innerChatInterface11}>
      <TextInput
        style={styles.rectangle}
        placeholder="Write your message..."
        keyboardType="default"
      />
      <Pressable style={[styles.rectangle1, styles.groupIconLayout]} />
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
      <View
        style={[styles.rectangle2, styles.ohWowLayout, styles.rectangleLayout]}
      />
      <Text style={[styles.ohWow, styles.ohWowTypo, styles.ohWowLayout]}>
        Oh Wow
      </Text>
      <View style={[styles.rectangle3, styles.rectangleLayout]} />
      <Text style={[styles.iGettingFull, styles.ohWowTypo]}>
        I getting full marks in AP
      </Text>
      <Text style={[styles.feb1200, styles.feb1200Typo]}>1 FEB 12:00</Text>
      <Text style={[styles.ahmedLuqman, styles.feb1200Typo]}>Ahmed Luqman</Text>
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
  ohWowLayout: {
    height: 50,
    top: 225,
  },
  rectangleLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  ohWowTypo: {
    alignItems: "center",
    display: "flex",
    color: Color.white,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  feb1200Typo: {
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    color: Color.white,
    letterSpacing: 1,
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
    left: 230,
    backgroundColor: Color.gray_100,
    width: 110,
  },
  ohWow: {
    left: 107,
    width: 213,
    textAlign: "right",
  },
  rectangle3: {
    top: 160,
    left: 32,
    backgroundColor: Color.darkslategray_100,
    width: 231,
    height: 49,
  },
  iGettingFull: {
    top: 155,
    left: 49,
    textAlign: "left",
    width: 243,
    height: 60,
  },
  feb1200: {
    top: 129,
    left: 150,
    fontSize: FontSize.size_xs,
    textAlign: "center",
  },
  ahmedLuqman: {
    top: 73,
    left: 222,
    fontSize: FontSize.size_mini,
    textAlign: "right",
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
