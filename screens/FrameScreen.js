import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

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
        style={styles.hereYaGoSherry12}
        resizeMode="cover"
        source={require("../assets/here-ya-go-sherry-1-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bgImageIcon: {
    top: 0,
    left: 0,
    width: 550,
    height: 1000,
    position: "absolute",
  },
  connectEngageThrive: {
    top: 764,
    left: 138,
    fontSize: FontSize.size_sm,
    lineHeight: 19,
    textTransform: "uppercase",
    fontFamily: FontFamily.latoRegular,
    color: "#fffffc",
    textAlign: "center",
    width: 211,
    height: 73,
    position: "absolute",
  },
  hereYaGoSherry12: {
    top: 341,
    left: 48,
    width: 344,
    height: 258,
    position: "absolute",
  },
  bgImageParent: {
    backgroundColor: Color.gray_200,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 940,
    overflow: "hidden",
  },
});

export default FrameScreen;
