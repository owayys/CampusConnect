import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const FrameScreen = () => {
  return (
    <View style={styles.bgImageParent}>
      <Image
        style={styles.bgImageIcon}
        resizeMode="cover"
        source={require("../assets/bg-image.png")}
      />
      <Text style={styles.connectEngageThrive}>Connect. Engage. Thrive.</Text>
      <Image
        style={styles.logo}
        resizeMode="cover"
        source={require("../assets/here-ya-go-sherry-1-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bgImageIcon: {
    // top: 0,
    // left: 0,
    // width: 550,
    // height: 1000,
    width: "110%",
    height: "110%",
    position: "absolute",
    overflow: "hidden",
  },
  connectEngageThrive: {
    //top: 764,
    top: responsiveScreenHeight(90),
    // left: 138,
    //fontSize: FontSize.size_sm,
    fontSize: responsiveScreenFontSize(1.8),
    //lineHeight: 19,
    lineHeight: responsiveScreenHeight(2),
    textTransform: "uppercase",
    fontFamily: FontFamily.latoRegular,
    color: "#fffffc",
    textAlign: "center",
    //width: 211,
    width: responsiveScreenWidth(55),
    //height: 73,
    height: responsiveScreenHeight(8.9),
    position: "absolute",
  },
  logo: {
    // top: 341,
    // left: 48,
    // width: 344,
    // height: 258,
    //position: "absolute",
    //width: 300,
    width: responsiveScreenWidth(77),
    // height: 258,
    height: responsiveScreenHeight(30.5),
  },
  bgImageParent: {
    backgroundColor: Color.gray_200,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FrameScreen;
